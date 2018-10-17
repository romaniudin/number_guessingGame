
/*  Game Logic
1. Start game
2. Asking name of the user (input) --> Greetings to the user (output)
3. Asking Max number for the game (input) --> Set this number as a max for the game (output)
4. Generate randomNumber 
5. Asking and take guessNumber from the user (input) --> Confirmation to the user about this number
6. Comparison of randomNumber and guessNumber
6.a --> Greetings to the user if guessNumber = randomNumber --> quit the Game
6.b --> Sad message to the user-> Try again -> go to p.5
6.c --> In case userGuess > Max number (predefined in p.3) -> inform User and ask to enter new number
6.d --> In case of '0' - > Error message --> quit the Game
*/

// -----THE GAME-----

const readlineSync = require('readline-sync');

//gets the maximum number for the game from the user and returns it as a Number
function getMaxFromUser(max) {
    var max = readlineSync.question('Please enter the maximum number for our Game today. ')
    console.log("The maximum number, you`ve entered, is " + max);
    return max
}

//generate a random integer between 1 and max
function generateRandomNumber(number) {
    return Math.ceil(Math.random() * number)
}

//Definition for getGuessFromUser
function getGuessFromUser() {
    let number = readlineSync.question('What is your number? ')
    console.log('So, you have chosen the number ' + number);
    return number
}

// check if a guess is correct and return a boolean
function isGuessCorrect(random, guess) {
    if (random == guess) {
        var finalResult = true;
        return finalResult;
    } else if (random > guess) {
        var finalResult = false
        return finalResult
    } else if(random < guess) {
        var finalResult = false
        return finalResult
    } 
}

function startGame() {
    //p.1-2 - Game starts and send Greetings to the user
    const name = readlineSync.question("What is your name, Stranger? ");
    console.log('Hello, ' + name + ', nice to meet you. Let`s begin!');
    //p3. - Asking Max number for the game (input)

    var max = getMaxFromUser()
    //p.4 - Generate randomNumber 
    var random = generateRandomNumber(max)
   
    console.log("I've chosen my number. Your turn, " + name + '! Please enter the number between 1 and ' + max)
    //p.6a - if the user guessed the randomNumber

    while (result !== true) {
        //p.5 - Asking and take guessNumber from the user input
        var guess = getGuessFromUser()
        //p.6 - Comparison of randomNumber and guessNumber based on different conditions
        var result = isGuessCorrect(random, guess)
        if (guess == 0) {
            console.log("Error: you entered '0', the Game is over.")
            result = true
        } else if (Number(guess) > Number(max)) {
            console.log('The number you`ve entered is more than Max. Enter the number again!')
        } else if (guess  > random) {
            console.log("That is too high! Don't be upset, " + name + ", try again!")
        } else if (guess  == random) {
            console.log("You've done it! Congratulations!")
            result = true
        } else 
            console.log("That is too low. Don't be upset, " + name + ", try again!")
    }
}

//Start point
startGame()
