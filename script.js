let computerSelection;

let getComputerChoice = () => {
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        computerSelection = "Rock"
    } else if (computerGuess === 2) {
        computerSelection = "Paper"
    } else computerSelection = "Scissors";
    console.log(computerSelection);
}

getComputerChoice();

