
alert("Welcome to the Psychic Game!                                                                   GOOD LUCK!");


var pcChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

var wins = 0;
var losses = 0;
var cantGuesses = 9;
var userChoices = [];

document.onkeyup = function (event) {

var userGuess = event.key;
var computerGuess = pcChoices[Math.floor(Math.random() * pcChoices.length)];
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

if (userOptions.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess){
        wins++;
        cantGuesses = 9;
        userChoices = [];
    }

    if (userGuess != computerGuess){
        cantGuesses--;
        userChoices.push(userGuess);
    }

    if (cantGuesses === 0){

        cantGuesses = 9;
        losses++;
        userChoices = [];
    }


    var html =
    "<h1> The Psychic Game </h1>" + 
    "<h4>Guess what letter I'm thinking of...</h4>" +
    "</br>" +
    "<h4>Wins: " + wins + "</h4>" +
    "<h4>Losses: " + losses + "</h4>" +
    "<h4>Guesses Left: " + cantGuesses + "</h4>" +
    "<h4>Your Guesses so far: " + userChoices.join(", ") + "</h4>";

    document.querySelector('#game').innerHTML = html;


}
};
 
