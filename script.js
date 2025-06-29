let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lost, Paper beats Rock.")
        computerScore++;
    } else if (humanChoice === "ROCK" && computerChoice === "ROCK") {
        console.log(`Tie, you both picked ${capitaliseFirstLetter(humanChoice)}.`)
    } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You won, Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "PAPER") {
        console.log(`Tie, you both picked ${capitaliseFirstLetter(humanChoice)}.`)
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You won, Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lost, Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You won, Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lost, Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log(`Tie, you both picked ${capitaliseFirstLetter(humanChoice)}.`)
    }
}

function playGame() {

    for(i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(humanSelection);
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) console.log("You won!");
    if(computerScore > humanScore) console.log("You lost!");
    if(humanScore === computerScore) console.log("Tie!");
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);

    if (number < 33) {
        return "ROCK";
    } else if (number >= 33 && number < 66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors? ").toUpperCase();
}

function capitaliseFirstLetter(string) {
    return String(string).charAt(0).toUpperCase().concat(String(string).slice(1).toLowerCase());
}

playGame();