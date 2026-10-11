@echo off
chcp 65001 >nul
title EVN Estimator Server
echo ============================================================
echo   ⚡ EVN BILL ESTIMATOR - ĐANG KHỞI CHẠY HỆ THỐNG
echo ============================================================
echo.

cd /d "%~dp0backend"
echo [1/2] Đang khởi động Backend Node.js (cổng 3000)...
start "EVN Backend API" /B node server.js

cd /d "%~dp0"
echo [2/2] Đang khởi động Frontend Web (cổng 8080)...
start "" http://localhost:8080
python -m http.server 8080
