'use strict';

let sum = 0; 
let cards = []; // create an array to have a list of cards

// Adding hasblackjack variable to keep track when you've landed a blackjack 
let hasBlackJack = false;

// Add isAlive variable
let isAlive = false;

// message variable
let message='';

//storing message-el in messageEl
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// create function getRandomCard() returns a random value for the first, second and newCard()
function getRandomCard (){
    let randomNumber = Math.floor((Math.random() * 13) + 1 ); // Picks a random number betwwen 1 and 13 
    // console.log(randomNumber);
    // return Math.floor(Math.random()*(12-2 + 1) + 2); Picks a random number between 2 to 11.
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 1;
    } else {
        return randomNumber;
    };
}


// create start game function to call renderGame function for start game button
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard ();
    let secondCard = getRandomCard (); 
    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard);
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: `;
    // loop through cards inside cards array and display them.
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += `${cards[i]} `;
    }

    
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
    let card = getRandomCard ();
    // console.log(card);
    cards.push(card);
    sum += card; 
    renderGame();    
}





// Stretch goals 
// When player receives 11 or ace ask player if they want 11 to be 1 or 11 ? 
//
//
//
//
//
