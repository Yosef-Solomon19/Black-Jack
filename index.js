
let firstCard = 0;
let secondCard = 0; 
let sum = 0; 
let cards = [];
let isAlive = false; 
let message = ""; 
let messageEl= document.getElementById("message-el") ; // Creating a variable that is selecting the element by its id "message-el". 
                                                       // We are going to be modifying the content inside the message-el paragraph
let sumEl = document.getElementById("sum-el") ;     // Creating a variable that is selecting the element by its id "sum-el".
let cardsEl = document.getElementById("cards-el") ; // Creating a variable that is selecting the element by its id "cards-el".
                                                    // We're doing this to display the new card values to the user to see what the user got.

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
