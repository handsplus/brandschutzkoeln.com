@echo off
set "SCRIPT_DIR=%~dp0"
set "PROJECT_ROOT=%SCRIPT_DIR%.."
cd /d "%PROJECT_ROOT%"
node "%~dp0..\node_modules\next\dist\bin\next" dev -p 3005
