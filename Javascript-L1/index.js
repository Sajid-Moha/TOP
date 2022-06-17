function computerPlay() {
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

function game(playerSelection, computerSelection) {
    let selection = playerSelection.toUpperCase();
    if (selection === computerSelection) {
        return "Tie!"
    } else if (selection === "ROCK") {
        if (computerSelection === "PAPER") {
            return `You Lose! ${computerSelection} beats ${selection}`;
        } else {
            return `You Win! ${selection} beats ${computerSelection}`;
        }
    } else if (selection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            return `You Lose! ${computerSelection} beats ${selection}`;
        } else {
            return `You Win! ${selection} beats ${computerSelection}`;
        }
    } else {
        if (computerSelection === "ROCK") {
            return `You Lose! ${computerSelection} beats ${selection}`;
        } else {
            return `You Win! ${selection} beats ${computerSelection}`;
        }
    }
}

let play = computerPlay();
console.log(play);
console.log(game("ROCK", play));
console.log(game("PAPER", play));
console.log(game("SCISSORS", play));