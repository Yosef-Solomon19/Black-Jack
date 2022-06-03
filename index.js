'use strict';

let firstCard = 10;
let secondCard = 5; 
let sum = firstCard + secondCard; 
let cards = [firstCard, secondCard]; // create an array to have a list of cards

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

// create start game funciton to call renderGame function for start game button
function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
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
    let card = Math.floor(Math.random()*(12-2 + 1) + 2); // Picks a random number between 2 to 11.
    console.log(card);
    cards.push(card);
    sum += card; 
    renderGame();
    
}





