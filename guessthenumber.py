import random


guessednumber = int(input("Guess a number from 1-10: "))
randomnumber = random.randint(1, 10)

if guessednumber > 10:
    print("Number can not be higher then 10!")
elif guessednumber < 0:
    print("Number can not be lower then 0!")
else: 
    if guessednumber == randomnumber:
        print("Congratulations you guessed the number! (", randomnumber, ")")
    else:
        print("Woops you didnt guess the number, the number was: ", randomnumber)
        play_again = input("Do you want to play again? (y/n): ").lower()
        if play_again == 'y':
            exec(open(__file__).read())
        else:
            print("Bye thank you for playing!")
