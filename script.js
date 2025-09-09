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


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return `tie. Both ${humanChoice}.`;
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } 
    else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

}

const resultsDiv = document.querySelector("#results");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    resultsDiv.textContent = playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    resultsDiv.textContent = playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    resultsDiv.textContent = playRound("scissors", getComputerChoice());
});