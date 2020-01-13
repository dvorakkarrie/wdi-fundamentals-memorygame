// Define arrays for the cards
let cards = ['queen','queen','king','king'];
let cardsInPlay = [];

// Define variables for the four king and queen cards
let cardOne = cards[0];
let cardTwo = cards[2];

// Add the first card to the cardsInPlay array.
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


// Messages displayed in Developer section
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

// An if statement to check if the length of the cardsInPlay array is 2.
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else 
		alert("Sorry, try again."); 
};

