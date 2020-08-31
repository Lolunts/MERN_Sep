// function myFoo(){
//     // write our function code in here
// }

// Basic arrow function that does nothing!
const myFoo = () => {}

// If we only have one parameter, we actually do not need the parentheses
const myFoo = num => {}

// OLD WAY: Write a function that takes a number and returns its square
function squareNum(num){
    return num*num;
}

// NEW WAY: Do the same as an arrow function
const squareNum = num => num * num;

// You can still write functions more similar to the old way if you want!
// const squareNum = num => {
//     return num * num;
// }

// OLD WAY: Write a function that takes 2 strings and returns an object
function stringsToObj(first, last){
    return { firstName: first, lastName: last };
}

// NEW WAY: Do the same as an arrow function
const stringsToObj = (first, last) => ({ firstName: first, lastName: last})

class Card {
    constructor(suit, face){
        this.suit = suit;
        this.face = face;
    }
}

class DeckOfCards {
    constructor(){
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.deck = [];

        // Stage 1: Old way
        // for(let suit of suits){
        //     for(let face of faces){
        //         this.deck.push(this.createCard(suit, face));
        //     }
        // }

        // Stage 2: New way v0.5
        // suits.forEach(function(suit){
        //     faces.forEach(function(face){
        //         this.deck.push(this.createCard(suit, face));
        //     })
        // })

        // Stage 3: New and improved v1.0
        suits.forEach(suit => {
            faces.forEach(face =>{
                this.deck.push(this.createCard(suit,face));
            })
        })
    }

    createCard(suit, face){
        return new Card(suit, face);
    }
}

let myDeckOfCards = new DeckOfCards();
console.log(myDeckOfCards);
