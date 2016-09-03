@echo off
setlocal enableextensions enabledelayedexpansion

for %%f in (*.*) do (
set ARG=%%~nxf
rename "%%f" !ARG: =-!
)

FOR /f "Tokens=*" %%f IN ('dir /l/b/a-d') DO (
	ren "%%f" "%%f"
)
