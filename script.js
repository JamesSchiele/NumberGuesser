let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random number between 0 and 9
function generateTarget(){

    let randomNum = Math.floor(Math.random() * 9);

    return randomNum;
};

const getAbsoluteDistance = (humanGuess, computerGuess) => {Math.abs(humanGuess - computerGuess)};

function compareGuesses(humanGuess, computerGuess, targetNumber){

    if (getAbsoluteDistance){
        return false;
    } else if (getAbsoluteDistance){
        return true;
    } else {
        return true;
    };
};

function updateScore(winner){
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    } else {
        return "Incorrect winner entry";
    }
};

function updateRound(){
    currentRoundNumber += 1;
};

console.log(updateScore('computer'))
console.log(computerScore)
