@echo off
setlocal

:: Capture start time
set START_TIME=%TIME%

:: Get remote URL and extract repo path (works for both HTTPS and SSH)
for /f "delims=" %%i in ('git remote get-url origin 2^>nul') do set REMOTE_URL=%%i

:: Strip HTTPS prefix
set REPO_PATH=%REMOTE_URL:https://github.com/=%

:: Strip SSH prefix
set REPO_PATH=%REPO_PATH:git@github.com:=%

:: Strip trailing .git if present
if "%REPO_PATH:~-4%"==".git" set REPO_PATH=%REPO_PATH:~0,-4%

:: Extract repo name
for /f "tokens=2 delims=/" %%i in ("%REPO_PATH%") do set REPO_NAME=%%i

set ACTIONS_URL=https://github.com/%REPO_PATH%/actions
set LOG_FILE=%~dp0deploy-log.txt

echo.
echo ========================================
echo   🚀 Deploying %REPO_NAME% to GitHub
echo ========================================
echo.

:: Fetch remote state without merging
echo Checking remote for updates...
git fetch origin >nul 2>&1

:: Count commits remote has that local doesn't
for /f %%i in ('git rev-list HEAD..origin/main --count 2^>nul') do set REMOTE_AHEAD=%%i

:: Count commits local has that remote doesn't
for /f %%i in ('git rev-list origin/main..HEAD --count 2^>nul') do set LOCAL_AHEAD=%%i

if not defined REMOTE_AHEAD set REMOTE_AHEAD=0
if not defined LOCAL_AHEAD set LOCAL_AHEAD=0

:: If remote has new commits, pull first
if %REMOTE_AHEAD% gtr 0 (
    echo Remote has %REMOTE_AHEAD% new commit(s^). Pulling first...
    git pull origin main
    if %ERRORLEVEL% neq 0 (
        echo.
        echo ========================================
        echo   ❌ Pull failed. Resolve conflicts manually.
        echo ========================================
        echo.
        call :write_log "FAILED" "Pull failed — merge conflict" "N/A"
        pause
        exit /b 1
    )
    echo Pull successful.
    echo.
)

:: Clean up ignored files from tracking
echo Cleaning up ignored files from tracking...
git rm -r --cached . >nul 2>&1

:: Stage all local changes
echo Staging local changes...
git add -A

:: Check if there is anything to commit
git diff --cached --quiet
if %ERRORLEVEL% equ 0 (
    if %LOCAL_AHEAD% equ 0 (
        echo.
        echo ========================================
        echo   ✅ Already in sync. Nothing to deploy.
        echo ========================================
        echo.
        call :write_log "SKIPPED" "Already in sync" "N/A"
        pause
        exit /b 0
    )
    goto :push
)

:: Capture diff stat for log
for /f "delims=" %%i in ('git diff --cached --stat --no-color 2^>nul ^| findstr "changed"') do set DIFF_SUMMARY=%%i

:: Generate AI commit message using Gemini CLI
echo Generating AI commit message...
for /f "delims=" %%i in ('git diff --cached --stat 2^>nul ^| gemini -p "Output only a single Git commit message of max 72 characters in imperative tone based on these changed file names and stats. Do not read files. Do not explain. Do not use tools. Output the commit message text only:"') do (
    if not defined AI_COMMIT set AI_COMMIT=%%i
)

:: Reject agentic responses — Gemini sometimes explains instead of committing
echo %AI_COMMIT% | findstr /i "will\|going to\|let me\|read\|understand\|provide\|contents\|functionality" >nul
if %ERRORLEVEL% equ 0 (
    echo Gemini returned invalid response. Using fallback.
    set AI_COMMIT=
)

:: Fallback if Gemini is unavailable or returned invalid response
if not defined AI_COMMIT (
    echo Using fallback commit message.
    set AI_COMMIT=%REPO_NAME% update: %date% %time%
)

echo Commit: %AI_COMMIT%
echo.
git commit -m "%AI_COMMIT%"

:push
:: Push to remote
echo Pushing to GitHub...
git push origin main

if %ERRORLEVEL% equ 0 (
    call :write_log "SUCCESS" "%AI_COMMIT%" "%DIFF_SUMMARY%"
    echo.
    echo ========================================
    echo   ✅ Success! %REPO_NAME% is live.
    echo   Commit: %AI_COMMIT%
    echo   Check %ACTIONS_URL%
    echo   Log saved to deploy-log.txt
    echo ========================================
) else (
    call :write_log "FAILED" "Push failed" "%DIFF_SUMMARY%"
    echo.
    echo ========================================
    echo   ❌ Push failed. Check your connection
    echo   or branch permissions.
    echo ========================================
)

echo.
pause
exit /b

:: ── Log Writer Subroutine ──────────────────────────────────────
:write_log
set END_TIME=%TIME%

:: Parse start time components
for /f "tokens=1-4 delims=:,. " %%a in ("%START_TIME%") do (
    set /a SH=%%a, SM=%%b, SS=%%c, SCS=%%d
)

:: Parse end time components
for /f "tokens=1-4 delims=:,. " %%a in ("%END_TIME%") do (
    set /a EH=%%a, EM=%%b, ES=%%c, ECS=%%d
)

:: Calculate total seconds elapsed
set /a ELAPSED=(EH-SH)*3600 + (EM-SM)*60 + (ES-SS)

:: Write log entry
echo. >> "%LOG_FILE%"
echo ================================================ >> "%LOG_FILE%"
echo DATE       : %date% >> "%LOG_FILE%"
echo START TIME : %START_TIME% >> "%LOG_FILE%"
echo END TIME   : %END_TIME% >> "%LOG_FILE%"
echo ELAPSED    : %ELAPSED% seconds >> "%LOG_FILE%"
echo REPO       : %REPO_NAME% >> "%LOG_FILE%"
echo STATUS     : %~1 >> "%LOG_FILE%"
echo COMMIT MSG : %~2 >> "%LOG_FILE%"
echo CHANGES    : %~3 >> "%LOG_FILE%"
echo REMOTE URL : %ACTIONS_URL% >> "%LOG_FILE%"
echo ================================================ >> "%LOG_FILE%"
exit /b