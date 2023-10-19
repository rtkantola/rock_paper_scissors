const choices = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {   
    return choices[(Math.floor(Math.random()*choices.length))]   
} 

let playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        console.log("It's a tie.");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Human wins");
        humanScore++;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Computer wins");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Human wins");
        humanScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer wins");
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer wins");
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Human");
        humanScore++;
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        let humanChoice = prompt("Make a choice");
        playRound(humanChoice, getComputerChoice());
    }
    if (humanScore < computerScore) {
        console.log("Machine wins the game " + computerScore + " to " + humanScore);
    }
    else if (humanScore > computerScore) {
        console.log("Human wins the game " + humanScore + " to " + computerScore);
    }
    else {
        console.log("It's a tie.")
    }
    
}

console.log(game())



