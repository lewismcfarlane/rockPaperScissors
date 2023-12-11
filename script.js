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


// Query selector variables
let startGameButton = document.querySelector('#startGameButton');
let playButtonArea = document.querySelector('#playButtonArea');
let startGameButtonArea = document.querySelector(`#startGameButtonArea`);
let resultsArea = document.querySelector(`#resultsArea`);
let scoreboard = document.createElement('span');

// Function to get computers choice
let getComputerChoice = () => {
    let computerGuess = Math.floor((Math.random()*3))+1;
    if (computerGuess === 1) {
        return "rock"
    } else if (computerGuess === 2) {
        return "paper"
    } else return "scissors";
}

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
// Event handler to listen to playButton clicks to assign playerSelection
function getPlayerChoice() {
    playButtonArea.addEventListener('click', (event) => {
        let playButtons = event.target;
        switch(playButtons.id) {
            case 'RockPlayButton':
                playerSelection = "rock";
                playGame();
                break;
            case 'PaperPlayButton':
                playerSelection = "paper";
                playGame();
                break;
            case 'ScissorsPlayButton':
                playerSelection = "scissors";
                console.log('click scissor')
                playGame();
                break;
        }
    })
    computerSelection = getComputerChoice();
}

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

// Function to play game: calculates winner of each round and adds to the round and score
function playGame() {
    let winner;
    let result = getRoundResult(computerSelection, playerSelection);
    round += 1;
    // computerSelection = getComputerChoice();
    getRoundResult(computerSelection, playerSelection);

    
    if (result === draw) gameInfoMessage.textContent = `It was a draw!`
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
}

// Calling this function to listen for which button the user clicks
getPlayerChoice();

