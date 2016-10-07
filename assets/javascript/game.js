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
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
            for (var j = 0; j < randomCoffee.length; j++) {
                if (randomCoffee[j] === userGuess) {
                    currentCoffee[j] = userGuess;
                }
            }
            currentSelected();
        } else if (wrongLetters.indexOf(userGuess) >= 0) {
            alert("Already Guessed");
        } else {
            wrongLetters.push(userGuess);
            printGuessedLetters();
            printGuesses(guessesRemaining--);

        }
        if (currentCoffee.indexOf("_") < 0) {
            console.log("You win!");
        		wins++;
            alert("You Win! The correct word was " + randomCoffee + ".");
        		randomCoffee = Math.floor(Math.random() * coffeeBlends.length);
        		randomCoffee = coffeeBlends[randomCoffee];
        		guessesRemaining = 12;
            wrongLetters = [];
            currentCoffee = [];


        		for (var i = 0; i < randomCoffee.length; i++) {
        			if (randomCoffee[i] === " ") {
        				currentCoffee.push(" ");
        			}
        			else  {
        				currentCoffee.push("_");
        			}
        		}

        		console.log(randomCoffee);
        		console.log(currentCoffee);
            currentSelected();
            printWins();
            printGuesses();
            printGuessedLetters();
            replaceLettersWithBlanks();
        }
    } else if (guessesRemaining <= 0) {
        alert("Game Over!");
    } else {

    }
};

// function to print wins and current coffee
function printWins() {
    var html = "<p>Wins: " + wins + "</p>";

    document.querySelector("#wins").innerHTML = html;
}

function currentSelected() {
  var currentWordHTML = "<p>The current coffee brew is " + "<p>" + currentCoffee.join(" ") + "</p>" + "</p>";
  document.querySelector("#currentCoffee").innerHTML = currentWordHTML;
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

// function to print letters already guessed
function replaceLettersWithBlanks() {
	for (var i = 0; i < randomCoffee.length; i++) {
		if (randomWord[i]) {
			currentCoffee.push(" ");
		}
		else  {
			currentCoffee.push("_");
		}

	}
}


printWins();
printGuesses();
printGuessedLetters();
currentSelected();
