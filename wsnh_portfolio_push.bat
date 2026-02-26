@REM @echo off
@REM setlocal

@REM echo.
@REM echo ========================================
@REM echo   🚀 Publishing Portfolio Updates to GitHub
@REM echo ========================================
@REM echo.

@REM :: Get current date and time for the commit message
@REM set datetime=%date% %time%

@REM echo Cleaning up ignored files from tracking...
@REM :: This removes anything from the index that is now in .gitignore
@REM git rm -r --cached . >nul 2>&1

@REM echo Re-syncing index and Pushing...
@REM :: Re-add everything (Git will ignore what's in .gitignore)
@REM git add -A && git commit -m "Portfolio update: %datetime%" && git push origin main

@REM if %ERRORLEVEL% equ 0 (
@REM     echo.
@REM     echo ========================================
@REM     echo   ✅ Success! Your portfolio is updated.
@REM     echo   Check https://github.com/wsnh2022/wsnh2022.github.io/actions
@REM     echo ========================================
@REM ) else (
@REM     echo.
@REM     echo ========================================
@REM     echo   ❌ Error: Deployment failed.
@REM     echo   Check if you have any changes to commit.
@REM     echo ========================================
@REM )

@REM echo.
@REM pause


@echo off
setlocal

:: Get remote URL and extract repo path (works for both HTTPS and SSH)
for /f "delims=" %%i in ('git remote get-url origin 2^>nul') do set REMOTE_URL=%%i

:: Strip HTTPS prefix: https://github.com/user/repo.git -> user/repo.git
set REPO_PATH=%REMOTE_URL:https://github.com/=%

:: Strip SSH prefix: git@github.com:user/repo.git -> user/repo.git
set REPO_PATH=%REPO_PATH:git@github.com:=%

:: Strip trailing .git if present
if "%REPO_PATH:~-4%"==".git" set REPO_PATH=%REPO_PATH:~0,-4%

:: Extract just the repo name from user/repo
for /f "tokens=2 delims=/" %%i in ("%REPO_PATH%") do set REPO_NAME=%%i

set ACTIONS_URL=https://github.com/%REPO_PATH%/actions

echo.
echo ========================================
echo   🚀 Publishing %REPO_NAME% Updates to GitHub
echo ========================================
echo.

echo Cleaning up ignored files from tracking...
git rm -r --cached . >nul 2>&1

echo Re-syncing index and Pushing...
git add -A && git commit -m "%REPO_NAME% update: %date% %time%" && git push origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================
    echo   ✅ Success! %REPO_NAME% is being updated.
    echo   Check %ACTIONS_URL%
    echo ========================================
) else (
    echo.
    echo ========================================
    echo   ❌ Error: Deployment failed.
    echo   Check if you have any changes to commit.
    echo ========================================
)

echo.
pause
