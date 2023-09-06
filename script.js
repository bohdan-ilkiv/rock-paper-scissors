function getComputerChoice() {
   const choices = ["Rock", "Paper", "Scissors"];
   const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();

   if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
   } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
   ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}

function game() {
   let playerScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (result.includes("You win")) {
         playerScore++;
      } else if (result.includes("You lose")) {
         computerScore++;
      }
   }

   if (playerScore > computerScore) {
      return "You win";
   } else if (computerScore > playerScore) {
      return "You lose";
   } else {
      return "It's a tie";
   }
}

console.log(game());
