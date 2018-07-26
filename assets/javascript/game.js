

    var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var numberGuesses = 10;
    var userGuessed = document.getElementById("letterGuessed")
    var winCount = document.getElementById("winCount");
    var lossCount = document.getElementById("lossCount"); 
    var guessesLeft = document.getElementById("guessesLeft");




    var computerChoice = letterChoices[Math.floor(Math.random()*letterChoices.length)]; 
    console.log(computerChoice);

    document.onkeyup = function(event){


    var userGuess = event.key;

    if (userGuess === computerChoice){
        wins++;
        winCount.textContent = wins;
        alert("You win! Great job! Play again!")
        numberGuesses = 10;
        computerChoice = letterChoices[Math.floor(Math.random()*letterChoices.length)]; 
        console.log(computerChoice);
        userGuessed.textContent = "";

    } else if (userGuess !== computerChoice){
        numberGuesses--;
        guessesLeft.textContent = numberGuesses;
        userGuessed.textContent += userGuess + ",";
    }

    if (numberGuesses <= 0){
        losses++;
        lossCount.textContent = losses;
        numberGuesses = 10;
        alert("You Lose! Try Agian!");
        computerChoice = letterChoices[Math.floor(Math.random()*letterChoices.length)]; 
        console.log(computerChoice);
        userGuessed.textContent ="";

    }


    }