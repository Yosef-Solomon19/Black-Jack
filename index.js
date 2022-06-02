'use strict';

let firstCard = 10;
let secondCard = 5; 
let sum = firstCard + secondCard; 

// Adding hasblackjack variable to keep track when you've landed a blackjack 
let hasBlackJack = false;

// Add isAlive variable
let isAlive = true;

// message variable
let message='';

//storing message-el in messageEl
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function startGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
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

// function to draw new cards 
function newCard () {
    let card = Math.floor(Math.random()*(12-2 + 1) + 2); // Picks a random number between 0 to 11.
    console.log(card);
    sum += card; 
    startGame();
    
}





