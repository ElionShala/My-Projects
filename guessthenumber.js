let guessednumber = 1 // change this to whatever you want!!

//do not touch
let randomnumber = Math.floor(Math.random() * 10) + 1;

if (guessednumber > 10) {
    console.log("Number can not be higher then 10!")
}else if (guessednumber < 0) {
    console.log("Number can not be lower then 0!")
} else {
    if (guessednumber == randomnumber) {
        console.log(`Congratulations you got the number correct! (${randomnumber})`)
    } else {
        console.log(`Woops you didn't guess it! The number was: ${randomnumber}`)
    }
}