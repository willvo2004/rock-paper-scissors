function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3) + 1];
}

function playRound(playerSelection, computerSelection) {
    const playerWin = (playerSelection == "rock" && computerSelection == "scissors") ? true : (playerSelection == "paper" && computerSelection == "rock") ? true : (playerSelection == "scissors" && computerSelection == "paper") ? true : false;
    const tie = playerSelection == computerSelection;
    const computerWin = !playerWin && !tie;
    
    if (playerWin) {
        return "You Win! " + playerSelection + "beats "  + computerSelection;
    }
    else if (computerWin) {
        return "You Lose! "  + playerSelection + "beats " + computerSelection;
    }
    else {
        return "Tie!";
    }
}

const mychoice = "rock";
const computerchoice = computerSelection();
console.log(playRound(mychoice, computerchoice));