// Select buttons using querySelector
const rock = document.querySelector('.button1')
const paper = document.querySelector('.button2')
const scissor = document.querySelector('.button3')
// Select score keeper div using querySelector
const score = document.querySelector('score-keeper')
// eventListener for all buttons
// eventListener will have callback function that plays round when clicked, as well as
// update the points
rock.addEventListener('click', e => console.log(e));

// Wite a function called 'game' that will play number of rounds specified.
function game (numOfRounds) { 
    let computerTally = 0;
    let personTally = 0;
    let tieTally = 0;
        // Invoke function to get result of computer
        let computerAnswer  = getComputerChoice();
        let result = playRound(playerAnswer,computerAnswer)
        if (result === 'win') personTally++
        if (result === 'lose') computerTally++
        if (result === 'tie') tieTally++
    }

// Create a callback function to play one round.
    function playRound (playerSelection, computerSelection) {
    // Create three variables, all initially set at zero, to be used to check whether computer or user has won. 
        let win = 0;
        let lose = 0;
        let tie = 0;
    // Create if statement for all scenario. Add 1 to variables created to check the results.
        if (playerSelection == 'rock') {
            switch (computerSelection) {
                case 'rock':
                tie++
                break;
                case 'paper':
                lose++
                break;
                case 'scissor':
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
        // Create a return value for each scenario. These return values will be used to tally in the main function. 
        if (win ===1) return 'win'
        else if (lose === 1) return 'lose'
        else if (tie === 1) return 'tie'
        }

// Create a function called getComputerChoice. 
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