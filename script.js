let computerSelection;
// USER ENTERS INPUT BELOW //
let userInput = "ROCK"
// USER ENTERS INPUT ABOVE //
let playerSelection = userInput.toLowerCase();
console.log(`Player choice: ${playerSelection}`)
let getComputerChoice = () => {
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        computerSelection = "rock"
    } else if (computerGuess === 2) {
        computerSelection = "paper"
    } else computerSelection = "scissors";
}
let playGame = () => {
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




getComputerChoice();
console.log(`Computer choice: ${computerSelection}`)
playGame();




