// Write a function called playRound with two 
// parameters (playerSelection,computerSelection)
function game (numOfRounds) { 
    let computerTally = 0;
    let personTally = 0;
    let tieTally = 0;
    for (let i = 0; I < numOfRounds; i++) {
        let playerAnswer = prompt("Please select between rock, paper, or scissor.")
        let computerAnswer  = getComputerChoice();
        let result = playRound(platerAnswer,computerAnswer)
        if (result === 'win') personTally++
        if (result === 'lose') computerTally++
    }
    alert (`you won ${personTally}
            computer won ${computerTally}
            you tied ${tieTally}`)
}

    function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor') {
        alert ('incorrect input! Please provide a correct input');
        }
        let win = 0;
        let lose = 0;
        let tie = 0;
    // Create if statement for rock, paper, and scissor. This way, if statement can be broken down into three parts.
        if (playerSelection == 'rock') {
            switch (computerSelection) {
                case 'rock':
                alert ('tied!')
                tie++
                break;
                case 'paper':
                alert ('you fuckiong lose! You suck.')
                lose++
                break;
                case 'scissor':
                alert('You actually won!')
                win++
                break;
            }
        } else if (playerSelection == 'paper') {
            switch (computerSelection) {
                case 'rock':
                alert('You actually won!')
                win++
                break;
                case 'paper':
                alert('tied!')
                tie++
                break;
                case 'scissor':
                alert ('you fuckiong lose! You suck.')
                lose++
                break;
            }
        } else if (playerSelection == 'scissor') {
            switch (computerSelection) {
                case 'rock':
                alert('you fuckiong lose! You suck.')
                lose++
                break;
                case 'paper':
                alert('You actually won!')
                win++
                break;
                case 'scissor':
                alert('tied!')
                tie++
                break;
            }
        }
        if (win ===1) return 'win'
        else if (lose === 1) return 'lose'
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