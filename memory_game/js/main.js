// Define fields to calculate number of wins and losses
let wins = 0;
let losses = 0;

// Define arrays for the cards
let cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

function resetGame() {
	cardsInPlay = [];
	for (let i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute
		("src","images/back.png");	
	}
}

function checkForMatch() {
	// Use an if statement to determine if two cards match.
	if (cardsInPlay[0] === cardsInPlay[1]) {
		wins += 1;
		alert("You found a match!");	
	} else {
		losses += 1;
		alert("Sorry, try again."); 
	}
	alert("Won: " + wins + "    Lost: " + losses);
}

function flipCard() {
	// Display card that was flipped over
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	const button = document.querySelector('button');
	button.addEventListener("click",resetGame);
}

function createBoard() {
	for (let i = 0 ; i < cards.length; i++) {
		let cardElement=document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

createBoard();
