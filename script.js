//game logic
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        roundWinner = 'player';
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        roundWinner = 'computer';
    }

    updateGame(roundWinner);
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

//UI
let playerRock = document.getElementById("player-rock");
let playerPaper = document.getElementById("player-paper");
let playerScissors = document.getElementById("player-scissors");
let computerRock = document.getElementById("computer-rock");
let computerPaper = document.getElementById("computer-paper");
let computerScissors = document.getElementById("computer-scissors");
let playerScoreText = document.getElementById('player-score');
let computerScoreText = document.getElementById('computer-score');
let announcerText = document.getElementById("announcer");
let resultText = document.getElementById("result");
let newGameButton = document.getElementById("restart");

playerRock.addEventListener("click", (e) => handleClick(e, 'rock'));
playerPaper.addEventListener("click", (e) => handleClick(e, 'paper'));
playerScissors.addEventListener("click", (e) => handleClick(e, 'scissors'));
newGameButton.addEventListener("click", newGame);


function handleClick(e, playerChoice) {
    let computerChoice = getComputerChoice();
    removeHighlight();
    e.target.classList.add("picked");
    switch (computerChoice) {
        case "rock":
            computerRock.classList.add("picked");
            break;
        case "paper":
            computerPaper.classList.add("picked");
            break;
        case "scissors":
            computerScissors.classList.add("picked");
            break;
    }
    playRound(playerChoice, computerChoice);
}

function removeHighlight() {
    playerRock.classList.remove("picked");
    playerPaper.classList.remove("picked");
    playerScissors.classList.remove("picked");
    computerRock.classList.remove("picked");
    computerPaper.classList.remove("picked");
    computerScissors.classList.remove("picked");
}

function updateGame(winner) {
    switch (winner) {
        case "player":
            resultText.innerText = "You Win!";
            resultText.style.color = "#23F0C7";
            break;
        case "computer":
            resultText.innerText = "You Lose!";
            resultText.style.color = "#EF767A";
            break;
        case "tie":
            resultText.innerText = "It's a tie!";
            resultText.style.color = "#FFE347";
            break;
    }

    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        announcerText.innerText = "Game Over!";
        playerRock.disabled = true;
        playerPaper.disabled = true;
        playerScissors.disabled = true;
        newGameButton.style.display = "block";
    }
}

function newGame() {
    removeHighlight();
    announcerText.innerText = "Choose your weapon\nFirst to five wins!";
    playerRock.disabled = false;
    playerPaper.disabled = false;
    playerScissors.disabled = false;
    newGameButton.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    resultText.innerText = "";
}