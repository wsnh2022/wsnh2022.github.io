@echo off
setlocal

echo.
echo ========================================
echo   🚀 Publishing Portfolio Updates to GitHub
echo ========================================
echo.

:: Get current date and time for the commit message
set datetime=%date% %time%

echo Cleaning up ignored files from tracking...
:: This removes anything from the index that is now in .gitignore
git rm -r --cached . >nul 2>&1

echo Re-syncing index and Pushing...
:: Re-add everything (Git will ignore what's in .gitignore)
git add -A && git commit -m "Portfolio update: %datetime%" && git push origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================
    echo   ✅ Success! Your portfolio is updated.
    echo   Check https://github.com/wsnh2022/wsnh2022.github.io/actions
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
