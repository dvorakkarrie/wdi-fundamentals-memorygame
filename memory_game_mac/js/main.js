//Define array for cards and cardsInPlay.
const cardsArray = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png",
},
{	
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{	
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png",
},
{	
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",
}
];

const cardsInPlay= [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardId) {

	cardsInPlay.push(cardsArray[cardId].rank);
	console.log("User flipped " + cardsArray[cardId].rank);
	console.log(cardsArray[cardId].suit);
	console.log(cardsArray[cardId].cardImage);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);