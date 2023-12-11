let computerSelection;
let playerSelection;
let playerWin = "win";
let playerLose = "lose";
let draw = "draw";

// Hold variables
// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();



// Function to get computers choice
let getComputerChoice = () => {
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        return "rock"
    } else if (computerGuess === 2) {
        return "paper"
    } else return "scissors";
}

// startGameButton DOM creation

// Variable to target the startGameButton
let startGameButton = document.querySelector('#startGameButton');

// Variable to target the playButtonArea container
let playButtonArea = document.querySelector('#playButtonArea');

// Function to create play button
function createPlayButton(gameChoice) {
    let playButton = document.createElement('button');
    playButton.textContent = gameChoice;
    return playButton;
}
// Event handler to add play buttons
startGameButton.addEventListener('click', (event) => {
    playButtonArea.appendChild(createPlayButton(`Rock`));
    playButtonArea.appendChild(createPlayButton(`Paper`));
    playButtonArea.appendChild(createPlayButton(`Scissors`));
    computerSelection = getComputerChoice();
})



// Event handler to listen to playButton clicks to assign playerSelection
playButtonArea.addEventListener('click', (event) => {
    let playButtons = event.target;

    switch(playButtons.id) {
        case 'rockPlayButton':
            playerSelection = "rock";
            break;
        case 'paperPlayButton':
            playerSelection = "paper";
            break;
        case 'scissorsPlayButton':
            playerSelection = "scissors";
            break;
    }
    
})

// Function to play a round of the game
let roundResult = (computerSelection, playerSelection) => {
    if (computerSelection === playerSelection) {
        return draw;
    }
    if ((computerSelection === "rock" && playerSelection === "scissors") || (
        computerSelection === "scissors" && playerSelection === "paper") || (
        computerSelection === "paper" && playerSelection === "rock")) {
        return playerLose;
    }
    if ((computerSelection === "rock" && playerSelection === "paper") || (
        computerSelection === "scissors" && playerSelection === "rock") || (
        computerSelection === "paper" && playerSelection === "scissors")) {
        return playerWin;
    }
       
}





// let playGame = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let winner;
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}. Player score: ${playerScore} Computer Score: ${computerScore}`);
//         groupedPlayRound();
//         let result = playRound(computerSelection, playerSelection)
//         if (result === playerWin) {
//             playerScore += 1;
//         } 
//         if (result === playerLose) {
//             computerScore += 1;
//         }
//     }
//     // Check score to determine the winner of the game //
//     if (computerScore > playerScore) {
//         winner = "You lost!";
//     } else if (computerScore < playerScore) {
//         winner = "You win!"
//     } else {
//         winner = "It was a tie!"
//     }
//     console.log('');
//     console.log('The final scores are...');
//     console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
//     console.log(`${winner}`)
// }












// // Function to display in console the results and player's choices
// let displayResults = () => {
// let result = playRound(computerSelection, playerSelection)
// console.log(`Player choice: ${playerSelection}
// Computer choice: ${computerSelection}
// ${result}`)
// }

// // Function to group one round and displaying the results to console
// let groupedPlayRound = () => {
//     computerSelection = getComputerChoice();
//     playerSelection = getPlayerChoice();
//     // playRound(computerSelection, playerSelection);
//     displayResults();

//     return playRound(computerSelection, playerSelection);
// }







