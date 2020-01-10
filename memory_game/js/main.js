// arrays used for memory card game
const cards = ['queen','queen','king','king'];
let cardsInPlay = [];

// variables used for card game
let cardOne = cards[0];
let cardTwo = cards[2];

// push to add card to cardsInPlay array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// Display the card the user flipped.
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
} 