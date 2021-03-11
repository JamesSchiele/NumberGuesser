let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generates random number between 0 and 9
function generateTarget(){

    let randomNum = Math.random() * 9

    return Math.floor(randomNum);
};

function compareGuesses(humanGuess, computerGuess, targetNumber){

    if (humanGuess === computerGuess){
        return true;
    } else if (Math.abs((targetNumber - computerGuess)) < Math.abs((targetNumber - humanGuess))){
        return false;
    } else {
        return false;
    }
};

function updateScore(winner){
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    };
};

function updateRound(){

};

console.log(generateTarget());