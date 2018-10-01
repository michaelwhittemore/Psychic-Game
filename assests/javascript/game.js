//initalize
var wins = 0;
var losses = 0;
var currentletter;
var guessesleft = 9;
var guesses = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//pick a letter
var currentletter = alphabet[Math.floor(Math.random() * 26)];

//for testing only
// document.getElementById("current").innerHTML = currentletter;

document.onkeyup = function (event) {
    var userGuess = event.key;
    //unquie guess
    if (!guesses.includes(userGuess)&&alphabet.includes(userGuess)) {
        guesses.push(userGuess);
        guessesleft--;
        //win
        if(userGuess===currentletter){
            wins++;
            alert("You Win");
            guessesleft=9;
            guesses=[];
            currentletter = alphabet[Math.floor(Math.random() * 26)];
        }
        else if(guessesleft<1){
            //reset the game state except wins and losses
            losses++;
            alert("You lose!");
            guessesleft=9;
            guesses=[];
            currentletter = alphabet[Math.floor(Math.random() * 26)];
        }

    }
    //guessed already or invalid input
    else{
        alert("Guess a valid new letter")
    }
    

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    document.getElementById("madeguesses").innerHTML = guesses;
    // document.getElementById("current").innerHTML = currentletter; //remove

}