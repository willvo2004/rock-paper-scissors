const playerSide = document.querySelector("#human-side");
const cpuSide = document.querySelector("#computer-side");

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const option = arr[Math.floor(Math.random() * 3)];
    switch (option) {
        case "rock":
            cpuSide.setAttribute("src", "images/rock.png");
            break;
        case "paper":
            cpuSide.setAttribute("src", "images/paper.png");
            break;
        case "scissors":
            cpuSide.setAttribute("src", "images/scissors.png");
    }
    return option;
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
    const playerWin = (playerSelection == "rock" && computerSelection == "scissors") ? true : (playerSelection == "paper" && computerSelection == "rock") ? true : (playerSelection == "scissors" && computerSelection == "paper") ? true : false;
    const tie = playerSelection == computerSelection;
    const computerWin = !playerWin && !tie;

    
    const playerScore = document.querySelector(".human-score-value");
    const computerScore = document.querySelector(".computer-score-value");

    if (playerWin) {
        //document.querySelector(".human-score").textContent = "You: " + playerCount;
        playerCount++;
        playerScore.innerHTML = playerCount;
        return "You Win! " + playerSelection + " beats "  + computerSelection;
    }
    else if (computerWin) {
        computerCount++;
        computerScore.innerHTML = computerCount;
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
    playerSide.setAttribute("src", "images/rock.png");
    header.textContent = result;
});

paper.addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    playerSide.setAttribute("src", "images/paper.png");
    header.textContent = result;
});

scissors.addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    playerSide.setAttribute("src", "images/scissors.png");
    header.textContent = result;
});



function game() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Choose: rock, paper, or scissors");
        console.log(playRound(choice.toLowerCase(), getComputerChoice()));
    }
}
