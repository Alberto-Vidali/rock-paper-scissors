function getComputerChoice() {
    choice = Math.random() * 3;
    return choice < 1 ? "rock" : choice < 2 ? "paper" : "scissors"
}

function getHumanChoice(prompt) {
    return prompt.toLowerCase();
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            document.querySelector(".round-results").textContent = `Draw! Opponent chosed also ${computerChoice}`;
        } else switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    document.querySelector(".round-results").textContent = `You lost! Rock is beaten by Paper`;
                    computerScore++;
                } else {
                    document.querySelector(".round-results").textContent = `You won! Rock beats Scissors`;
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    document.querySelector(".round-results").textContent = `You won! Paper beats Rock`;
                    humanScore++;
                } else {
                    document.querySelector(".round-results").textContent = `You lost! Paper is beaten by Scissors`;
                    computerScore++;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    document.querySelector(".round-results").textContent = `You lost! Scissor is beaten by Rock`;
                    computerScore++;
                } else {
                    document.querySelector(".round-results").textContent = `You won! Scissors beats Paper`;
                    humanScore++;
                }
        }
    }

    document.querySelector(".rock").addEventListener("click", (event) => {
        playRound("rock", getComputerChoice());
    })
    document.querySelector(".paper").addEventListener("click", (event) => {
        playRound("paper", getComputerChoice());
    })
    document.querySelector(".scissors").addEventListener("click", (event) => {
        playRound("scissors", getComputerChoice());
    })
    
}

playGame();