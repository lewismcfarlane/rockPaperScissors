let computerSelection;
let playerSelection;

// Function to get players choice
let getPlayerChoice = () => {
    // USER ENTERS INPUTS BELOW //
    let userInput = "rock";
    // USER ENTERS INPUT ABOVE //
    return userInput.toLowerCase();
}


// Function to get computers choice
let getComputerChoice = () => {
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        return "rock"
    } else if (computerGuess === 2) {
        return "paper"
    } else return "scissors";
}

// Function to play a round of the game
let playGame = (computerSelection, playerSelection) => {
    console.log(`Player choice: ${playerSelection}`)
    console.log(`Computer choice: ${computerSelection}`)

    if (computerSelection === playerSelection) {
        console.log("Tie!")
    }
    if ((computerSelection === "rock" && playerSelection === "scissors") || (
        computerSelection === "scissors" && playerSelection === "paper") || (
        computerSelection === "paper" && playerSelection === "rock")) {
        console.log("Computer wins!")
    }
    if ((computerSelection === "rock" && playerSelection === "paper") || (
        computerSelection === "scissors" && playerSelection === "rock") || (
        computerSelection === "paper" && playerSelection === "scissors")) {
        console.log("Player wins!")
    }
    
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

playGame(computerSelection, playerSelection);




