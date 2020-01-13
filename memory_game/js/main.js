// Define arrays for the cards
let cards = ['queen','queen','king','king'];
let cardsInPlay = [];

function checkForMatch() {
		
	// An if statement to check if the length of the cardsInPlay array is 2.
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again."); 
		}
	};
};

function flipCard(cardID) {

	// Display card that was flipped over
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
};

flipCard(0);
flipCard(2);



