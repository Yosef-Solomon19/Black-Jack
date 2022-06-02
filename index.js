'use strict';

let firstCard = 10;
let secondCard = 11; 
let sum = firstCard + secondCard; 

// Adding hasblackjack variable to keep track when you've landed a blackjack 
let hasBlackJack = false;

// Add isAlive variable
let isAlive = true;

// message variable
let message='';

//storing message-el in messageEl
let messageEl = document.getElementById("message-el");

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }    
    messageEl.textContent = message;
}





