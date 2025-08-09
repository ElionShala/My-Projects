import time;

timeminutesecond = input("Do you want to choose hours, minutes or seconds (h, m, s): ")
if timeminutesecond == "h":
    alarm = input("How many hours: ")
    time.sleep(int(alarm) * 3600)
    print("Time is up!\n" * 3)
elif timeminutesecond == "m":
    alarm = input("How many minutes: ")
    time.sleep(int(alarm) * 60)
    print("Time is up!\n" * 3)
elif timeminutesecond == "s":
    alarm = input("How many seconds: ")
    time.sleep(int(alarm))
    print("Time is up!\n" * 3)
else: 
    print("Operator not chosen!")


