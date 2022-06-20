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
    const result = document.querySelector("#result");
    
    // to account for case insensitivity, convert user play to all uppercase
    let selection = playerSelection.toUpperCase();
    if (selection === computerSelection) {
        result.textContent = "Tie!";
        return 0;
    } else if (selection === "ROCK") {
        if (computerSelection === "PAPER") {
            result.textContent = `You Lose! ${computerSelection} beats ${selection}`;
            return 2;
        } else {
            result.textContent = `You Win! ${selection} beats ${computerSelection}`;
            return 1;
        }
    } else if (selection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            result.textContent = `You Lose! ${computerSelection} beats ${selection}`;
            return 2;
        } else {
            result.textContent = `You Win! ${selection} beats ${computerSelection}`;
            return 1;
        }
    } else {
        if (computerSelection === "ROCK") {
            result.textContent = `You Lose! ${computerSelection} beats ${selection}`;
            return 2;
        } else {
            result.textContent = `You Win! ${selection} beats ${computerSelection}`;
            return 1;
        }
    }
}

// play 5 rounds of rock paper scissors, user vs computer
// ties are not replayed, computer play is randomly generated
// invalid inputs are treated as a tie game
function game(play) {
    let compPlay = computerPlay();
    let humanPlay = play;

    const computer = document.querySelector("#computer-play");
    const human = document.querySelector("#human-play");

    playRound(humanPlay, compPlay);
    computer.textContent = compPlay;
    human.textContent = humanPlay;
}