// Write a function called playRound with two 
// parameters (playerSelection,computerSelection)
function game (numOfRounds) { 
    for (let i = 0; i < numOfRounds; i++) {
        let playerAnswer = prompt("Please select between rock, paper, or scissor.")
        let computerAnswer  = getComputerChoice();
        playRound(platerAnswer,computerAnswer)
        let computerTally = 0;
        let personTally = 0;
    }
}

    function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
        alert ('incorrect input! Please provide a correct input');
        }
    // Create if statement for rock, paper, and scissor. This way, if statement can be broken down into three parts.
        if (playerSelection == 'rock') {
            switch (computerSelection) {
                case 'rock':
                alert ('tied!')
                break;
                case 'paper':
                alert ('you fuckiong lose! You suck.')
                break;
                case 'scissor':
                alert('You actually won!')
                break;
            }
        } else if (playerSelection == 'paper') {
            switch (computerSelection) {
                case 'rock':
                alert('You actually won!')
                break;
                case 'paper':
                alert('tied!')
                break;
                case 'scissor':
                alert ('you fuckiong lose! You suck.')
                break;
            }
        } else if (playerSelection == 'scissor') {
            switch (computerSelection) {
                case 'rock':
                alert('you fuckiong lose! You suck.')
                break;
                case 'paper':
                alert('You actually won!')
                break;
                case 'scissor':
                alert('tied!')
                break;
            }
        }
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

game(5);