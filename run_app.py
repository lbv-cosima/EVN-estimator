#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
run_app.py - Khởi chạy ứng dụng Web Ước Tính Tiền Điện Tháng Tới
Tự động mở trình duyệt cục bộ tại http://localhost:8080 (hoặc cổng trống tiếp theo).
"""

import os
import sys
import socket
import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT_DEFAULT = 8080

def find_available_port(start_port=8080, max_attempts=20):
    for port in range(start_port, start_port + max_attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
    return start_port

def main():
    # Chuyển về thư mục chứa file script này
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    port = find_available_port(PORT_DEFAULT)
    url = f"http://127.0.0.1:{port}"

    print("=" * 65)
    print("⚡ ỨNG DỤNG ƯỚC TÍNH TIỀN ĐIỆN THÁNG TỚI (EVN BILL ESTIMATOR)")
    print("=" * 65)
    print(f"👉 Thư mục dự án: {script_dir}")
    print(f"👉 Máy chủ đang chạy tại: {url}")
    print("👉 Nhấn Ctrl + C trong cửa sổ này để dừng máy chủ bất cứ lúc nào.")
    print("=" * 65)

    # Tự động mở trình duyệt web
    webbrowser.open(url)

    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng máy chủ. Cảm ơn bạn đã sử dụng!")
        httpd.server_close()
        sys.exit(0)

if __name__ == '__main__':
    main()
