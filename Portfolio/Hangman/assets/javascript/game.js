// Global Variables
//--------------------------------------------------------------
//Arrays & Variables go here (to hold data)

//All of the possible options for words to guess!
var wordOptions = ["slime", "blonde", "gameshow", "sailor", "hysteria", "librarian", "pecker", "capital", "marshmellows", "ghost"];

//Array that will hold teh chosen word
var selectedWord = "";

//What letters are in the word...
var lettersinWord = [];

//To Calulate the number of blanks
var numBlanks = 0;

//Array that will hold the number of blanks and successes
var blanksAndSuccesses = [];

//Array for wrong guesses
var wrongLetters = [];

//The Movie The Game Counter
var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;

//Functions
//--------------------------------------------------------------

//START THE GAME
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split(""); //having an array with individual letters
    numBlanks = lettersinWord.length; //how many blanks are requred

    //We need to reset
    guessesLeft = 12;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Create the blanks and successes with correct number of blanks
    for (var i = 0; i < numBlanks; ++i) {
        blanksAndSuccesses.push("_");
    }
    //This will change the HTML to reflect the round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Just testin' some code ovah heeah
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    //to check if letter exists in code
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    //check where in word letter exists, then pop out blanksandsuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    //else letter isn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    //testing, testingg
    console.log(blanksAndSuccesses);
}

    function roundComplete() {
        console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);

        //update the HTML to rflect the most recent count stats
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

        //check if user won
        if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
            winCount++;
            alert("You came, you saw, you kicked its ass!");

            //update win counter in HTML
            document.getElementById("winCounter").innerHTML = winCount;

            startGame();
        }

        //check if user lost
        else if (guessesLeft == 0) {
            lossCount++;
            alert("This reminds me of the time you tried to drill a hole through your head. Try again.")

            //update HTML
            document.getElementById("lossCounter").innerHTML = lossCount;
            
            startGame();
        }

    }
    //Main Process
    //--------------------------------------------------------------
    //This will being the code for the very first time!

    startGame();

    //Keyclicks
    document.onkeyup = function (event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(letterGuessed);
        roundComplete();

        //test
        console.log(letterGuessed);
    }

    //testing
    