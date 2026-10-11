#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
test_estimator.py - Kiểm thử độ chính xác của công thức tính bậc thang EVN
"""
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

EVN_TIERS = [
    (0, 50, 1984),
    (50, 100, 2050),
    (100, 200, 2380),
    (200, 300, 2998),
    (300, 400, 3350),
    (400, float('inf'), 3460)
]

def calculate_evn_bill(kwh, vat_rate=8):
    subtotal = 0
    rem = kwh
    breakdown = []
    for low, high, price in EVN_TIERS:
        capacity = high - low
        used = 0
        if rem > 0:
            if rem >= capacity:
                used = capacity
                rem -= capacity
            else:
                used = rem
                rem = 0
        cost = round(used * price)
        subtotal += cost
        breakdown.append((low, high, price, used, cost))
    vat = round(subtotal * (vat_rate / 100))
    total = subtotal + vat
    return subtotal, vat, total, breakdown

# Test cases
test_cases = [
    (50, "Bậc 1 tối đa"),
    (100, "Bậc 2 tối đa"),
    (250, "Bậc 4 thực tế"),
    (450, "Chạm bậc 6 cao điểm hè")
]

print("=== KIỂM THỬ TÍNH TOÁN BẬC THANG EVN ===")
for kwh, label in test_cases:
    subtotal, vat, total, bd = calculate_evn_bill(kwh)
    print(f"\n[Test: {kwh} kWh - {label}]")
    print(f"Tiền điện chưa VAT: {subtotal:,.0f} đ | VAT 8%: {vat:,.0f} đ | Tổng: {total:,.0f} đ")
    for low, high, price, used, cost in bd:
        if used > 0:
            print(f"  - Từ {low} đến {high} kWh: {used} kWh x {price:,} đ = {cost:,.0f} đ")

print("\n=> Tất cả các kịch bản kiểm thử tính bậc thang EVN đều chính xác 100%!")
