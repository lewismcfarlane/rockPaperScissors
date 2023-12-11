let computerSelection;
let playerSelection;
let playerWin = "win";
let playerLose = "lose";
let draw = "draw";
let isGamePlaying = false;
let playerScore;
let computerScore;
let gameInfoMessage;
let playButton;
let gameOverMessage;


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

// Variable to target startGameButton container
let startGameButtonArea = document.querySelector(`#startGameButtonArea`);

// Target resultsArea

let resultsArea = document.querySelector(`#resultsArea`);

// Function to create play button
function createPlayButton(gameChoice) {
    let playButton = document.createElement('button');
    playButton.textContent = gameChoice;
    playButton.id = (gameChoice + 'PlayButton');
    return playButton;
}
// Event handler to add play buttons and remove start game button
startGameButton.addEventListener('click', (event) => {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        console.log(round);

        if (gameOverMessage !== "") {
            while (resultsArea.firstChild) {
                resultsArea.removeChild(resultsArea.firstChild);
            }
        }

        startGameButtonArea.removeChild(startGameButton);
        gameInfoMessage = document.createElement('p');
        gameInfoMessage.textContent = "Select a choice!";

        scoreboard.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
        resultsArea.appendChild(scoreboard);

        playButtonArea.appendChild(gameInfoMessage);
        playButtonArea.appendChild(createPlayButton(`Rock`));
        playButtonArea.appendChild(createPlayButton(`Paper`));
        playButtonArea.appendChild(createPlayButton(`Scissors`));
        // computerSelection = getComputerChoice();
        console.log(`Game Started`);
        // console.log(`Computer's choice: ${computerSelection}`);
    
})

let scoreboard = document.createElement('span');

// Event handler to listen to playButton clicks to assign playerSelection
function getPlayerChoice() {
    playButtonArea.addEventListener('click', (event) => {
        let winner;
        
        
        let playButtons = event.target;
        let result = getRoundResult(computerSelection, playerSelection);
        switch(playButtons.id) {
            case 'RockPlayButton':
                playerSelection = "rock";
                console.log(`Player's choice: ${playerSelection}`);
                computerSelection = getComputerChoice();
                console.log(`Computers's choice: ${computerSelection}`);
                getRoundResult(computerSelection, playerSelection);
                console.log(result);
                break;
            case 'PaperPlayButton':
                playerSelection = "paper";
                console.log(`Player's choice: ${playerSelection}`);
                computerSelection = getComputerChoice();
                console.log(`Computers's choice: ${computerSelection}`);
                getRoundResult(computerSelection, playerSelection);
                console.log(result);
                break;
            case 'ScissorsPlayButton':
                playerSelection = "scissors";
                round += 1;
                computerSelection = getComputerChoice();
                getRoundResult(computerSelection, playerSelection);
                if (result === playerWin) {
                    playerScore += 1;
                    gameInfoMessage.textContent = `Player wins!`
                    scoreboard.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
                }
                if (result === playerLose) {
                    computerScore +=1;
                    gameInfoMessage.textContent = `Computer wins!`
                    scoreboard.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
                }
            
                if (result === draw) gameInfoMessage.textContent = `It was a draw!`
                if (playerScore === 5) winner = "You win";
                if (computerScore === 5) winner = "The Computer wins";
                if (playerScore === 5 || computerScore === 5) {
                    console.log('Game over');
                    while (playButtonArea.firstChild) {
                        playButtonArea.removeChild(playButtonArea.firstChild);
                    }
                    startGameButtonArea.appendChild(startGameButton);
                    let gameOverMessage = document.createElement('p');
                    gameOverMessage.textContent = `Game over! ${winner} after ${round} rounds!`
                    resultsArea.appendChild(gameOverMessage);
                }
                break;
        }
        
    })
}

// function playGame() {
//     round += 1;
//     computerSelection = getComputerChoice();
//     getRoundResult(computerSelection, playerSelection);
//     if (result === playerWin) {
//         playerScore += 1;
//         gameInfoMessage.textContent = `Player wins!`
//         scoreboard.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
//     }
//     if (result === playerLose) {
//         computerScore +=1;
//         gameInfoMessage.textContent = `Computer wins!`
//         scoreboard.textContent = `Player score: ${playerScore}   Computer score: ${computerScore}`;
//     }

//     if (result === draw) gameInfoMessage.textContent = `It was a draw!`
//     if (playerScore === 5) winner = "You win";
//     if (computerScore === 5) winner = "The Computer wins";
//     if (playerScore === 5 || computerScore === 5) {
//         console.log('Game over');
//         while (playButtonArea.firstChild) {
//             playButtonArea.removeChild(playButtonArea.firstChild);
//         }
//         startGameButtonArea.appendChild(startGameButton);
//         let gameOverMessage = document.createElement('p');
//         gameOverMessage.textContent = `Game over! ${winner} after ${round} rounds!`
//         resultsArea.appendChild(gameOverMessage);
//     }
// }












// Function to play a round of the game
let getRoundResult = (computerSelection, playerSelection) => {
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

getPlayerChoice();

// function playGame() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let result = getRoundResult(computerSelection, playerSelection);
//     let scoreboard = document.createElement('span');


//     while (playerScore < 5 || computerScore < 5) {
//         console.log(`player: ${playerScore} computer: ${computerScore}`)
//         getPlayerChoice();
//         getRoundResult();
//         if (result === playerWin) {
//             playerScore += 1;
//         }
//         if (result === playerLose) {
//             computerScore += 1;
//         }
        
//     }

// }

// playGame();







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







