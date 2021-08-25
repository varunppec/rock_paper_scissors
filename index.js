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

    const container = document.querySelector('.container');
    const btn_r = document.createElement('button');
    const btn_p = document.createElement('button');
    const btn_s = document.createElement('button');
    container.append(btn_r, btn_p, btn_s);

    btn_r.innerText = "Rock";
    btn_p.innerText = "Paper";
    btn_s.innerText = "Scissors";

    
    const btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        button.addEventListener('click', function() {
            printResult(playRound(button.textContent, computerPlay()));
        })
    })
    
    
    
}

function printResult(status) {
    const container = document.querySelector('.container');
    const div = document.createElement("div");
    const button = document.querySelectorAll("button");
    container.appendChild(div);
    if (status == -1) {
        div.textContent = "You lose! Paper beats Rock.";
        cscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == -2) {
        div.textContent = ("You lose! Scissors beats Paper.");
        cscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == -3) {
        div.textContent = ("You lose! Rock beats Scissors.");
        cscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == 0) {
        div.textContent = ("Draw!");
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == 1) {
        div.textContent = ("You win! Paper beats Rock.");
        pscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == 2) {
        div.textContent = ("You win! Rock beats Scissors.");
        pscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }
    if (status == 3) {
        div.textContent =   ("You win! Scissors beats Paper.");
        pscore++;
        div.textContent += "\tScore: " + pscore + " - " + cscore;
    }

    if (pscore == 5) {
        div.textContent += "You won the game!";
        button.forEach((btn) => btn.remove()); 
    }
    if (cscore == 5) {
        div.textContent += " You lost the game!";
        button.forEach((btn) => btn.remove()); 
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