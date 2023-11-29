let getComputerChoice = () => {
    let computerChoice;
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        computerChoice = "Rock"
    } else if (computerGuess === 2) {
        computerChoice = "Paper"
    } else computerChoice = "Scissors";
    console.log(computerChoice);
}

getComputerChoice();
