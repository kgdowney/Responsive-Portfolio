//------------------------------------------------
// GLOBAL VARIABLES
//------------------------------------------------

//Chaos Emeralds
var emerald = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    gray:
    {
        name: "Gray",
        value: 0
    },
    purple:
    {
        name: "Purple",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    turquoise:
    {
        name: "Turquoise",
        value: 0
    }
};

//Scores (current & target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//------------------------------------------------
// FUNCTIONS
//------------------------------------------------

//Help function for getting rando numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts the game (and restarts it)
var startGame = function () {

    //reset the current score
    currentScore = 0;

    //set a new target score between 19 and 120
    targetScore = getRandom(19, 120);

    //set different values for each of the crystals between 1 and 12
    emerald.blue.value      = getRandom(1, 12);
    emerald.green.value     = getRandom(1, 12);
    emerald.red.value       = getRandom(1, 12);
    emerald.gray.value      = getRandom(1, 12);
    emerald.turquoise.value = getRandom(1, 12);
    emerald.yellow.value    = getRandom(1, 12);
    emerald.purple.value    = getRandom(1, 12);

    //change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    //Testing Console
    console.log("----------------------------------------")
    console.log("Target Score: " + targetScore)
    console.log("Blue: " + emerald.blue.value + " | Green: " + emerald.green.value + " | Red: " + emerald.red.value + " | Gray: " + emerald.gray.value + " | Turquoise: " + emerald.turquoise.value + " | Yellow: " + emerald.blue.value + " | Purple: " + emerald.purple.value);
    console.log("----------------------------------------")
}

//Respond to clicks on emeralds
var addValues = function (emerald) {

    //change current score
    currentScore = currentScore + emerald.value;

    //change html to reflect chances in currentScore
    $("#yourScore").html(currentScore);

    //call the checkWin function
    checkWin();


    //test
    console.log("Your Score: " + currentScore);

}
//check if user won or lost and reset game
var checkWin = function () {

    if (currentScore > targetScore) {
        
        document.getElementById("lossSound").play();
        alert("Oh no! Sonic has passed out!");
        
        console.log("You lost!");

        //add to lost counter
        lossCount++;

        //change loss count html
        $("#lossCount").html(lossCount);

        //restart game
        startGame();

    }
    else if (currentScore == targetScore) {
       document.getElementById("winSound").play();
        alert("YOU HAVE BECOME SUPER SONIC! CONGRATULATERIONS");
        console.log("You won!");

        //add to win counter
        winCount++;
        //change win count html
        $("#winCount").html(winCount);

        //Restart game
        startGame();
    }

}


//------------------------------------------------
// MAIN PROCESS
//------------------------------------------------
//Starts the game for the first time
startGame();

// Audio Setup
        // ===========

        // Creating an audio element with JavaScript
        var audioElement = document.createElement("audio");

        // Set it's source to the location
        // of sonic theme song file.
        audioElement.setAttribute("src", "assets/Sonic2.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });

        // Pause Button
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });


$("#red").click(function () {
    addValues(emerald.red);
});

$("#blue").click(function () {
    addValues(emerald.blue);
});

$("#green").click(function () {
    addValues(emerald.green);
});

$("#gray").click(function () {
    addValues(emerald.gray);
});

$("#purple").click(function () {
    addValues(emerald.purple);
});

$("#turquoise").click(function () {
    addValues(emerald.turquoise);
});

$("#yellow").click(function () {
    addValues(emerald.yellow);
});