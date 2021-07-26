
let firstCard = 0;
let secondCard = 0; 
let sum = 0; 
let cards = [];
let isAlive = false; 
let message = ""; 
let messageEl= document.getElementById("message-el") ; 
let sumEl = document.getElementById("sum-el") ; 
let cardsEl = document.getElementById("cards-el") ; 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }
}
