let cscore = 0, pscore = 0;
function computerPlay() {
    no = Math.floor(Math.random() * 10);
    if (no < 4) {
        return "Rock";
    }
    if (no < 7) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            return -1;
        }
        if (computerSelection == "SCISSORS") {
            return 2;
        }
        else {
            return 0;
        }
    }
    if (playerSelection == "PAPER") {
        if (computerSelection == "PAPER") {
            return 0;
        }
        if (computerSelection == "SCISSORS") {
            return -2;
        }
        else {
            return 1;
        }
    }
    if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            return 3;
        }
        if (computerSelection == "SCISSORS") {
            return 0;
        }
        else {
            return -3;
        }
    }
}

function game() {
    let choice = prompt("Pick your weapon!");
    printResult(playRound(choice, computerPlay()));
    choice = prompt("Pick your weapon!");
    printResult(playRound(choice, computerPlay()));
    choice = prompt("Pick your weapon!");
    printResult(playRound(choice, computerPlay()));
    choice = prompt("Pick your weapon!");
    printResult(playRound(choice, computerPlay()));
    choice = prompt("Pick your weapon!");
    printResult(playRound(choice, computerPlay()));
    if (cscore == pscore) {
        console.log("It's a tie!");
        console.log("Score: ", pscore," - ", cscore);
    }
    else if (cscore > pscore) {
        console.log("You lost!");
        console.log("Score: ", pscore," - ", cscore);
    }
    else {
        console.log("You win!");
        console.log("Score: ", pscore," - ", cscore);
    }
}

function printResult(status) {
    if (status == -1) {
        console.log("You lose! Paper beats Rock");
        cscore++;
    }
    if (status == -2) {
        console.log("You lose! Scissors beats Paper");
        cscore++;
    }
    if (status == -3) {
        console.log("You lose! Rock beats Scissors");
        cscore++;
    }
    if (status == 0) {
        console.log("Draw!");
    }
    if (status == 1) {
        console.log("You win! Paper beats Rock");
        pscore++;
    }
    if (status == 2) {
        console.log("You win! Rock beats Scissors");
        pscore++;
    }
    if (status == 3) {
        console.log("You win! Scissors beats Paper");
        pscore++;
    }
}
game();
/* 
r p -1
p s -2
s r -3
p r 1
r s 2
s p 3
*/