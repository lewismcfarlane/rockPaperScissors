let computerSelection;
let playerSelection;


// Function to get players choice
let getPlayerChoice = () => {
    // USER ENTERS INPUTS BELOW //
    let userInput = prompt("Rock paper scissors?");
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
let playRound = (computerSelection, playerSelection) => {

    if (computerSelection === playerSelection) {
        return "It's a tie!";
    }
    if ((computerSelection === "rock" && playerSelection === "scissors") || (
        computerSelection === "scissors" && playerSelection === "paper") || (
        computerSelection === "paper" && playerSelection === "rock")) {
        return "Computer wins!";
    }
    if ((computerSelection === "rock" && playerSelection === "paper") || (
        computerSelection === "scissors" && playerSelection === "rock") || (
        computerSelection === "paper" && playerSelection === "scissors")) {
        return "Player wins!";
    }
    
}
// Function to display in console the results and player's choices
let displayResults = () => {
let result = playRound(computerSelection, playerSelection)
console.log(`Player choice: ${playerSelection}
Computer choice: ${computerSelection}
${result}`)
    
}

// Function to play the game for 5 rounds
let playGame = () => {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    playRound(computerSelection, playerSelection);
    displayResults();
    
}

const startGame = document.getElementById("startGameButton");
startGame.addEventListener("click", playGame);


