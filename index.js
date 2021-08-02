
let firstCard = 0;
let secondCard = 0; 
let sum = 0; 
let cards = [];
let isAlive = false; 
let hasBlackJack = false;
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

function startGame() {
    isAlive = true;                 
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard 
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {                         // creating a function to continue the game. 
    cardsEl.textContent = "Cards: "             // Selecting the cardsEl to display "Cards:"
    for (let i = 0; i < cards.length; i++) {    // For every element that is inside the cards array
        cardsEl.textContent += cards[i] + " "   // Add the element that is inside the array by its index provided by the count
                                                // to the cardsEl.textContent till it reaches the maximum number of elements inside the array.
                                                // which is done by comparing the count to the arrays length "cards.length"
        }

        sumEl.textContent = "Sum: " + sum       // Select sumEl to desplay the total sum of the card values.
        if (sum <= 20) {
            message = "Do you want to draw another card?";
        } else if (sum === 21) {
            message = "You've got Blackjack!!";
            hasBlackJack = True; 
        } else {
            message = "You're out of the game";
            isAlive = false;
        }
        messageEl.textContent = message; 
    

}

function newCard () {
    let card = getRandomCard() ; 
    sum += card
    cards.push(card)
    renderGame()
}