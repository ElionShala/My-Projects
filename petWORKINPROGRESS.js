let hunger = 0 // 0 is full 10 is starving
let happiness = 10 // 10 is happy 0 is sad
let rest = 10 // 10 is fully rested 0 is very sleepy
let name = "pet"

function status() {
    console.log(`Hunger: ${hunger} | Happiness: ${happiness} | Rest: ${rest}`)
    if (hunger >= 6) {
        console.log(`${name} is hungry! Hunger: ${hunger}`)
    } 
    if (happiness <= 6) {
        console.log(`${name} is sad! Happiness: ${happiness}`)
    } 
    if (rest <= 6) {
        console.log(`${name} is sleepy! Rest: ${rest}`)
    } 
}

function feed() {
    hunger -= 3
    rest--
    if (hunger < 0) {
        console.log()
    }
}

function play() {
    happiness += 3
    rest--
    hunger++
    if (play <= 10) {
        console.log(`Played with ${name}! Happiness: ${happiness}`)
    } else {
        console.log(`${name} died form being too happy!`)
        process.exit();
    }
}

function sleep() {
    rest = rest + 3
    happiness--
    hunger--
    if (rest <= 10) {
        console.log(`${name} slept! Rest: ${rest}`)
    } else {
        console.log(`${name} has died from sleeping too much!`)
        process.exit();
    }
}

function namepet(petname) {
    name = petname
    console.log(`Successfully changed the pet's name to: ${name}`)
}

status()