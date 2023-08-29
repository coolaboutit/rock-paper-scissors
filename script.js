function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!playerSelection) {
        return `That's choice is not valid!`;
    }
    if (playerSelection === computerSelection) {
        return `It's a draw! You both picked ${computerSelection}`
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beat Paper"
    }
}

function game() {
    let playerSelection = "";
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon");
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(`playerScore: ${playerScore} computerScore: ${computerScore}`);
    }
}

game();