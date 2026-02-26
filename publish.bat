@echo off
setlocal

echo.
echo ========================================
echo   🚀 Publishing Blog Updates to GitHub
echo ========================================
echo.

:: Get current date and time for the commit message
set datetime=%date% %time%

echo Packaging and Pushing...
git add -A && git commit -m "Blog update: %datetime%" && git push origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================
    echo   ✅ Success! Your blog is being updated.
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
