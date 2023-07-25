function game() {
    let userScore = 0;
    let computerScore = 0;
    let round = 1;

    for (let i = 0; i < 5; i++) {

      console.log(`Round ${round}`);
      
      const userChoice = prompt("Choose rock, paper or scissors");
      const computerChoice = ["rock", "paper", "scissors"][
        Math.floor(Math.random() * 3)];

      console.log(`You chose ${userChoice}, computer chose ${computerChoice}`);

      if (userChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("You win!");
        userScore++;
      } else {
        console.log("Computer wins!");
        computerScore++;
      }
      round++;
    }

    console.log(`Final score: You ${userScore}, Computer ${computerScore}`);
    
    if(userScore > computerScore) {
        console.log("You win the game!")
    }else if( userScore < computerScore) {
        console.log("You lose the game!")
    } else {
        console.log("Tie!")
    }
}

game();