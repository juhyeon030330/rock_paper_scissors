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
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Computer wins!";
    }

    return `Human choice: ${humanChoice}
            Computer choice: ${computerChoice}
            ${resultMessage}`;
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