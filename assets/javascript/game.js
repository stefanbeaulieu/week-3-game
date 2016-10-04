// Press any key to get started! - DONE
// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _ _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H)

var wins = 0;
var losses = 0;
var guessesRemaining = 12;
var coffeeBlends = ["italian", "espresso", "new england", "cuban", "turkish", "american"];
var randomCoffee = coffeeBlends[Math.floor(Math.random() * coffeeBlends.length)];
var wrongLetters = [];
var currentCoffee = [];

for (var i = 0; i < randomCoffee.length; i++) {
  if (randomCoffee[i] === " ") {
    currentCoffee.push("-");
  } else {
    currentCoffee.push("_");
  }
}

var currentWordHTML = currentCoffee.join(" ");

document.onkeyup = function(event) {

    if (guessesRemaining > 0) {

  	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 

    if (randomCoffee.indexOf(userGuess) >= 0) {
      for (var i = 0; i < randomCoffee.length; i++) {
        if (randomCoffee[i] === userGuess) {
          currentCoffee[i] = userGuess;
        }
      }
      currentWordHTML = currentCoffee.join(" ");
      if (currentWordHTML == randomCoffee[i]) {
        wins++;
      }
      document.querySelector("#currentCoffee").innerHTML = currentWordHTML.toUpperCase();
    }
    else if (wrongLetters.indexOf(userGuess) >= 0) {
      alert("Already Guessed");
    }
    else {
      wrongLetters.push(userGuess);
      printGuessedLetters();
         printGuesses(guessesRemaining--);

    }
  } else if (guessesRemaining <= 0) {
  alert("Game Over!");
  }

};

// for (var i = 0; i < randomCoffee.length; i++) {
//   if (randomCoffee[i] === " ") {
//     currentCoffee.push("-");
//   } else {
//     currentCoffee.push("_");
//   }
// }

// function to print wins and current coffee
function printWins() {
  var html = "<p>Wins: " + wins + "</p>";

  document.querySelector("#wins").innerHTML = html;
}

// function to print guesses remaining
function printGuesses() {
  var guesses = "<p> Remaining Guesses: " + guessesRemaining + "</p>";

  document.querySelector("#guesses").innerHTML = guesses;
}

// function to print letters already guessed
function printGuessedLetters() {
  var incorrectLettersHTML = "<p>Letters already guessed: </p>" + wrongLetters.join(" ");
  document.querySelector("#incorrectLetters").innerHTML = incorrectLettersHTML;
}



printWins();
printGuesses();
printGuessedLetters();
