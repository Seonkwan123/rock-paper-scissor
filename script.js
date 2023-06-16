// Write a function called playRound with two 
// parameters (playerSelection,computerSelection)
function playRound (playerSelection, computerSelection) {
playerSelection.toLowerCase();
if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissor') {
    alert ('incorrect input! Please provide a correct input');
}
// create a switch statement to compare the results to each scenario

}

// Create a function called getComputerChoice 
function getComputerChoice () {
// Randomly generate whole numbers from 1-3. Set each value to either
// Rock Paper or scissor
    let randomNum = Math.ceil(Math.random() * 3);
    let computerAnswer;
    switch (randomNum) {
        case 1:
            computerAnswer = 'rock';
            break;
        case 2:
            computerAnswer = 'paper';
            break;
        case 3: 
            computerAnswer = 'scissor';
            break;
    }
// return that value, which will be stored as a variable. This variable 
// will be one of the two paramenters for playRound Function
    return computerAnswer;
}

const playerSelection = prompt("Please select between rock, paper, or scissor.")
console.log(playerSelection)
const computerSelection  = getComputerChoice();
console.log(computerSelection)
console.log (playRound(playerSelection,computerSelection))

