@echo off
cd /d %~dp0
title Push Thinking Bottle to GitHub
cls
echo ==================================================
echo         Thinking Bottle - GitHub Push Script
echo ==================================================
echo.

:: Stage all files
echo [1/3] Staging all changes...
git add .
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to stage changes.
    goto end
)

:: Prompt for commit message
echo.
set /p commit_msg="[2/3] Enter commit message (press Enter for 'update'): "
if "%commit_msg%"=="" set commit_msg=update

:: Commit changes
echo.
echo [3/3] Committing changes...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Nothing new to commit or commit failed.
)

:: Push changes
echo.
echo Pushing to GitHub (origin main)...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed. Please check your internet connection or credentials.
    goto end
)

echo.
echo ==================================================
echo   Success! Your blog is now deploying on GitHub!
echo ==================================================

:end
echo.
echo Press any key to exit...
pause >nul
