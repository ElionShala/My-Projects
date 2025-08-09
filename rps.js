var choice = "paper" // Change this to your choice "rock", "paper", or "sissors"

// Dont touch
var random = Math.floor(Math.random() * 3) + 1;
var number = 1;
var computerchoice = "";

if (choice == "rock") {
    number = 1;
} else if (choice == "paper") {
    number = 2;
} else if (choice == "sissors") {
    number = 3;
} else {
    console.log("Wrong Choice!")
}

if (random == 1) {
    computerchoice = 1;
} else if (random == 2) {
    computerchoice = 2;
} else if (random == 3) {
    computerchoice = 3;
}

if (number == 1) {
    if (computerchoice == 1) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose rock!")
        console.log("Draw!")
    }
    if (computerchoice == 2) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose paper!")
        console.log(`You lose!`)
    }
    if (computerchoice == 3) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose sissors!")
        console.log(`You Win!`)
    }
}

if (number == 2) {
    if (computerchoice == 1) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose rock!")
        console.log(`You Win!`)
    }
    if (computerchoice == 2) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose paper!")
        console.log(`Draw!`)
    }
    if (computerchoice == 3) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose sissors!")
        console.log(`You Lose!`)
    }
}

if (number == 3) {
    if (computerchoice == 1) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose rock!")
        console.log(`You Lose!`)
    }
    if (computerchoice == 2) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose paper!")
        console.log(`You Win!`)
    }
    if (computerchoice == 3) {
        console.log(`You chose ${choice}!`)
        console.log("Computer chose sissors!")
        console.log(`Draw!`)
    }
}