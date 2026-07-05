#!/usr/bin/env python3
"""Exit 0 during normal update windows, 2 during Monday 13:00-17:00 KST freeze."""
from datetime import datetime, timezone, timedelta
import sys
KST = timezone(timedelta(hours=9))
now = datetime.now(KST)
# Python weekday: Monday == 0
if now.weekday() == 0 and 13 <= now.hour < 17:
    print(f"freeze window active: {now:%Y-%m-%d %H:%M} KST")
    sys.exit(2)
print(f"updates allowed: {now:%Y-%m-%d %H:%M} KST")
