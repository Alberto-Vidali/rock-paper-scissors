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
            console.log(`Draw! You opponent chosed also ${computerChoice}`);
        } else switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You lost! Rock is beaten by Paper");
                    computerScore++;
                } else {
                    console.log("You won! Rock beats Scissors");
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    console.log("You won! Paper beats Rock");
                    humanScore++;
                } else {
                    console.log("You lost! Paper is beaten by Scissors");
                    computerScore++;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lost! Scissor is beaten by Rock");
                    computerScore++;
                } else {
                    console.log("You won! Rock beats Scissors");
                    humanScore++;
                }
        }
    }
    
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(prompt("Enter your choice")), getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        alert("You won the game!");
    } else if (humanScore < computerScore) {
        alert("You lost the game!");
    } else {
        alert("Game resulted in a draw!");
    }
    
}

playGame();