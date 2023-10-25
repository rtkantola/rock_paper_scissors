const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");
const result = document.createElement("div");
const gameChoices = document.createElement("div");
const btn = document.querySelectorAll("#btn");

let getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let playRound = (playerSelection, computerSelection) => {
  gameChoices.textContent =
    "Human chose: " +
    playerSelection +
    " and Computer chose: " +
    computerSelection;
  container.appendChild(gameChoices);
  if (playerSelection === computerSelection) {
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    humanScore++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    humanScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    humanScore++;
  }
};

let updateGameState = () => {
  result.classList.add("content");
  if (humanScore == 5 || computerScore == 5) {
    result.textContent =
      "MACHINE: " + computerScore + " || HUMAN: " + humanScore;
    for (let i = 0; btn.length; i++) {
      btn[i].disabled = true;
    }
  } else if (humanScore < computerScore) {
    result.textContent =
      "Machine leads the game " + computerScore + " to " + humanScore;
  } else if (humanScore > computerScore) {
    result.textContent =
      "Human leads the game " + humanScore + " to " + computerScore;
  } else {
    result.textContent = "You are tied.";
  }
  container.appendChild(result);
};

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.name, getComputerChoice());
    updateGameState();
  });
});
