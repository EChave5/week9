

class Player {
  constructor(nameData) {
    this.playerName = nameData;
    this.playerPoints = 0;
    this.playerHand = []; //push all the cards into hands using dealCards method
  }
}
 

//creating the cards
class Card {
  constructor(suitData, rankData, valueData) {
    this.suit = suitData;
    this.rank = rankData;
    this.value = valueData;
  }
}

//creating the deck
class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck () {
    let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let value = 0;

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        switch (ranks[j]) {
          case 'J': 
            value = 11
            break; 
          case 'Q': 
            value = 12
            break; 
          case 'K':
            value = 13
            break;
          case 'A':
            value = 14
            break;
          default:
            value = (ranks[j]);
        }
        this.cards.push(new Card (suits[i], ranks[j], value))
      }
    }
  }
  

  shuffleDeck () { 
  for(let i = 0; i < this.cards.length; i++) {
    let location1 = Math.floor((Math.random() * this.cards.length));
    let location2 = Math.floor((Math.random() * this.cards.length));
    let tmp = this.cards[location1];

    this.cards[location1] = this.cards[location2];
    this.cards[location2] = tmp;
  }
  }

dealCards() {
  for (let i = 0; i < this.cards.length - 26; i++) {
    player1.cards = this.cards.slice(0, 26);
    for (let j = 0; j < this.cards.length - 26; j++) {
      player2.cards = this.cards.slice(26, 52)
    }
  }
}
}

class Game {
  constructor () {
    
    this.gameDeck = [];
    this.player1 = {};
    this.player2 = {};
  }
dealCard() {
  return this.gameDeck.cards.pop();
}

//method deals cards, compares cards, and earns points 
playGame() {
  this.player1 = new Player('Player 1');
  this.player2 = new Player('Player 2'); 
  console.log('Player 1', this.player1, 'Player 2', this.player2);
  console.log('Creating Game Deck...');
  this.gameDeck = new Deck(); //new deck class created
  this.gameDeck.createDeck(); //deck created in order 
  this.gameDeck.shuffleDeck(); //shuffles deck
  console.log('Deck:', this.gameDeck);
  for (let i = 0; i < this.gameDeck.cards.length; i++) {
    console.log(i, 'Dealing Cards...', this.gameDeck.cards[i]);
    this.player1.playerHand.push(this.dealCard(this.gameDeck.cards[i]));
    this.player2.playerHand.push(this.dealCard(this.gameDeck.cards[i]));
  }
  console.log(this.player1);
  if (this.player1.card.value > this.player2.card.value) {
    return (this.player1.points + 1) }
  else if (this.player1.card.value < this.player2.card.value) {
    return (this.player2.points + 1) }
  else if (this.player1.card.value == this.player2.card.value) {
    return ("Tie");
   }
  }


winner () {
  if (player1.points > player2.points) {
    return ('Player 1 wins!') 
  } else if (player1.points < player2.points) {
    return ('Player 2 wins!') 
  } else {
    return ('Tie!')
  }
  }

}


let war = new Game;

war.playGame();
console.log(player1.points + " = Player 1");
console.log(player2.points + ' = Player 2');




