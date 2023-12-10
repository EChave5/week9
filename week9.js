

class Player {
  constructor(name) {
    this.name = name;
  }
}
 let player1 = new Player;
 let player2 = new Player; 

//creating the cards
class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

//creating the deck
class Deck {
  constructor(cards) {
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
              score = (ranks[j]);
        }
        this.cards.push(new Card (suits[i], rank[j], value))
      }
    }
  }
  

  shuffleDeck () { 
  for(let i = 0; i < this.cards.length; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
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
  constructor (points) {
    this.points = points;
  }
dealCard(deck) {
  return deck.pop();
}

playGame() {
  for (let i = 0; i < this.cards.length; i++) {
    player1.dealCard;
    player2.dealCard;
  }
  if (player1.card.value > player2.card.value) {
    return (player1.points + 1) }
  else if (player1.card.value < player2.card.value) {
    return (player2.points + 1) }
  else if (player1.card.value == player2.card.value) {
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
console.log(player2.points + ' = Player 2')




