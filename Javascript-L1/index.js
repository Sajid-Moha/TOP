// select a random play for computer
// 0 = rock
// 1 = paper
// 2 = scissors
function computerPlay() {
    // select an integer from 0 - 2 (inclusive)
    let computer_play = Math.floor(Math.random() * 3);
    switch (computer_play) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        default:
            return "SCISSORS";
            break;
    }
}

// check if user's play wins, loses, or ties with computer selection
// output victory/loss/tie message to console
function playRound(playerSelection, computerSelection) {
    // to account for case insensitivity, convert user play to all uppercase
    let selection = playerSelection.toUpperCase();
    if (selection === computerSelection) {
        console.log("Tie!");
        return 0;
    } else if (selection === "ROCK") {
        if (computerSelection === "PAPER") {
            console.log(`You Lose! ${computerSelection} beats ${selection}`);
            return 2;
        } else {
            console.log(`You Win! ${selection} beats ${computerSelection}`);
            return 1;
        }
    } else if (selection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            console.log(`You Lose! ${computerSelection} beats ${selection}`);
            return 2;
        } else {
            console.log(`You Win! ${selection} beats ${computerSelection}`);
            return 1;
        }
    } else {
        if (computerSelection === "ROCK") {
            console.log(`You Lose! ${computerSelection} beats ${selection}`);
            return 2;
        } else {
            console.log(`You Win! ${selection} beats ${computerSelection}`);
            return 1;
        }
    }
}

// return true if selected play is valid, if not return false
// valid plays are "ROCK", "PAPER", & "SCISSORS" (case insensitive)
function validPlay(play) {
    if (play == undefined) {
        return false;
    }
    formattedPlay = play.toUpperCase();
    if (play != "ROCK" && play != "PAPERS" && play != "SCISSORS") {
        return false;
    }

    return true;
}

// receive user input, play round of rock paper scissors
// return 0 for tie/invalid play, return 1 for user win, return 2 for user loss
function round() {
    let play = prompt("Rock, Paper, or Scissors?", "ROCK");
    if (!validPlay(play)) {
        return 0;
    }
    let result = playRound(play, computerPlay());
    return result;
}

// play 5 rounds of rock paper scissors, user vs computer
// ties are not replayed, computer play is randomly generated
// invalid inputs are treated as a tie game
function game() {
    let playerWins = 0;
    let numTies = 0;

    for (let i = 0; i < 5; i++) {
        let result = round();
        if (result == 0) {
            numTies++;
        }
        if (result == 1) {
            playerWins++;
        }
    }
    if (playerWins > 2) {
        console.log("You win :D")
    } else if (numTies > 2) {
        console.log("Tie!")
    } else {
        console.log("You lose :(")
    }
}

/* let play = computerPlay();
console.log(play);
console.log(playRound("ROCK", play));
console.log(playRound("PAPER", play));
console.log(playRound("SCISSORS", play)); */
game();