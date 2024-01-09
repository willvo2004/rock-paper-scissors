function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const playerWin = (playerSelection == "rock" && computerSelection == "scissors") ? true : (playerSelection == "paper" && computerSelection == "rock") ? true : (playerSelection == "scissors" && computerSelection == "paper") ? true : false;
    const tie = playerSelection == computerSelection;
    const computerWin = !playerWin && !tie;

    const playerCount = 0;
    const computerCount = 0;

    if (playerWin) {
       // document.querySelector("#human-score").textContent = "You: " + playerCount;
        return "You Win! " + playerSelection + " beats "  + computerSelection;
    }
    else if (computerWin) {
       // document.querySelector("#computer-score").textContent = "CPU: " + computerCount;
        return "You Lose! "  + computerSelection + " beats " + playerSelection;
    }
    else {
        return "Tie!";
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const header = document.querySelector("h1");

rock.addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    header.textContent = result;
});

paper.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    header.textContent = result;
});

scissors.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    header.textContent = result;
});

function game() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose: rock, paper, or scissors");
        console.log(playRound(choice.toLowerCase(), getComputerChoice()));
    }
}
