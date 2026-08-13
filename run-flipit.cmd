@echo off
setlocal
set "NODE_HOME=%~dp0.tools\node"
set "PATH=%NODE_HOME%;%PATH%"
"%NODE_HOME%\corepack.cmd" npm run dev
