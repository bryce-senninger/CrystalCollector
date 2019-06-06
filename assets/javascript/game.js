let computerGuess
let purpCrys
let whiteCrys
let redCrys
let blueCrys
let liveScore = 0
let wins = 0
let losses = 0

$("#message").html("Go on, guess away!");

function startGame() {
    liveScore = 0;
    $("#live").html(liveScore);
    computerGuess = Math.floor((Math.random() * 101) + 19);
        $("#compGuess").html(computerGuess);
    purpCrys = Math.floor((Math.random() * 12) + 1);
    whiteCrys = Math.floor((Math.random() * 12) + 1);
    redCrys = Math.floor((Math.random() * 12) + 1);
    blueCrys = Math.floor((Math.random() * 12) + 1);
}

startGame();

function checkIfEnded() {
    if (computerGuess == liveScore) {
        $("#message").html("You won!");
        wins++;
        $("#wins").html("Wins: " + wins);
        startGame();
    } else if (computerGuess < liveScore) {
        $("#message").html("You lose!");
        losses++
        $("#losses").html("Losses: " + losses);
        startGame();
    }
}

$("#purp").on("click", function() {
    liveScore += purpCrys;
    $("#live").html(liveScore);
    $("#message").html("Keep guessing!");
    checkIfEnded();
});
$("#white").on("click", function() {
    liveScore += whiteCrys;
    $("#live").html(liveScore);
    $("#message").html("Keep guessing!");
    checkIfEnded();
});
$("#red").on("click", function() {
    liveScore += redCrys;
    $("#live").html(liveScore);
    $("#message").html("Keep guessing!");
    checkIfEnded();
});
$("#blue").on("click", function() {
    liveScore += blueCrys;
    $("#live").html(liveScore);
    $("#message").html("Keep guessing!");
    checkIfEnded();
});   

function playAudio() {
    let music = document.getElementById("myAudio");
    music.play();
}

function pauseAudio() {
    let music = document.getElementById("myAudio");
    music.pause();
}