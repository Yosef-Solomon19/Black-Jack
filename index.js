'use strict';

let firstCard = 10;
let secondCard = 10; 
let sum = firstCard + secondCard; 

// Adding hasblackjack variable to keep track when you've landed a blackjack 
let hasBlackJack = false;

// Add isAlive variable
let isAlive = true;

// message variable
let message='';


// Adding conditional statement for sum result
if (sum <= 20) {
    message="Do you want to draw a new card ?";  

} else if (sum === 21) {
    message="Sweet! You've got Blackjack! 🥳.";
    hasBlackJack = true;
    isAlive = true;

} else {
    message="You're out of the game! 😭.";
    isAlive = false;
}

console.log(message)


