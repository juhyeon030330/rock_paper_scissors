
function getComputerChoice() {
    const num = Math.random();

    if (num < 1/3) {
        return "rock";
    } else if (num < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const word = prompt("Enter your choice: rock, paper, or scissors");
    return word.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`tie. Both ${humanChoice}.`);
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++; 
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++; 
    }

    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();