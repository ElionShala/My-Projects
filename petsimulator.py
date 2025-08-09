import time

hungry = 5
rest_value = 5
happiness = 5

def status():
    print("Hungry: ", hungry, "\nRest: ", rest_value, "\nHappiness: ", happiness)

def feed():
    global hungry, rest_value, happiness
    hungry -= 3
    rest_value -= 1
    happiness += 1

def play():
    global hungry, rest_value, happiness
    hungry += 1
    rest_value -= 1
    happiness += 3

def rest():
    global hungry, rest_value, happiness
    hungry += 1
    rest_value += 3
    happiness -= 1

while True:
    time.sleep(1)
    if hungry > 10:
        print("Your pet starved to death!")
        break
    elif hungry < 0:
        print("Your pet died from bloating! (Too fat)")
        break
    elif rest_value > 10:
        print("Your pet died from sleeping!")
        break
    elif rest_value < 0:
        print("Your pet died from not sleeping!")
        break
    elif happiness > 10:
        print("Your pet died from being too happy!")
        break
    elif happiness < 0:
        print("Your pet died from being too sad!")
        break
    status()
    action = input("What do you want to do? (rest/feed/play/status): ").strip().lower()
    if action == "feed":
        feed()
    elif action == "play":
        play()
    elif action == "rest":
        rest()
    elif action == "status":
        pass
    else:
        print("Invalid action. Skipping turn.")
