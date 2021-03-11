let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random number between 0 and 9
function generateTarget(){

    let randomNum = Math.floor(Math.random() * 9);

    return randomNum;
};

const getAbsoluteDistance = (humanGuess, computerGuess) => {Math.abs(humanGuess - computerGuess)}; // Calculate absolute difference between computer and user

function compareGuesses(humanGuess, computerGuess, targetNumber){ // Compares guesses to see who wins - computer vs human

    if (humanGuess > 9 || humanGuess < 0){
        return "Human guess out of range!";
    };

    if (getAbsoluteDistance){
        return false;
    } else if (getAbsoluteDistance){
        return true;
    } else {
        return true;
    };
};

function updateScore(winner){ // Increments human or computer score by 1 if they win
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    } else {
        return "Incorrect winner entry";
    }
};

function updateRound(){ // Increment round number by 1 
    currentRoundNumber += 1;
};

console.log(updateScore('computer'))
console.log(computerScore)
