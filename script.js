
const startBtn = document.querySelector('.startBtn')
startBtn.addEventListener('click', startGame);

// Select all elements inside 'body' and loop through to give transparancy of 0 
const bodyChildrenElements = document.querySelectorAll('body > *');


function startGame () {
let winTally =0;
let loseTally = 0;
let tieTally = 0;
// Add class to unhide the elements that were hidden when start button is shown. 
bodyChildrenElements.forEach(element => {
    element.classList.add('active')
})
// Hide start button
// Select buttons using querySelector
const buttons = document.querySelectorAll('button')
// const rock = document.querySelector('.rock')
// const paper = document.querySelector('.paper')
// const scissor = document.querySelector('.scissor')

// Select score keeper child divs
const scoreKeeper = document.querySelectorAll('.score-keeper > div')

// input HTML Text into score keeper child divs
scoreKeeper.forEach(score => {
    score.textContent = `${score.getAttribute('class')}: ${winTally}`
})

// eventListener will have callback function that plays round when clicked, as well as
// update the points
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        console.log(e);
    let userInput = button.getAttribute('class')
    console.log(userInput)
    game(userInput)
})
})

// Add visual for what was selected for both the user and the computer


// Wite a function called 'game' that will take userInput and compare with computer selection. This is a callback function when any buttons are pressed.
function game (userSelection) { 
let computerAnswer = getComputerChoice()
let result = playRound(userSelection, computerAnswer);
if (result === 'win') {
    winTally ++
    scoreKeeper[0].textContent = `win: ${winTally}`
} else if (result === 'lose') {
    loseTally ++
    scoreKeeper[1].textContent = `lose: ${loseTally}`
} else if (result === 'tie') {
    tieTally ++
    scoreKeeper[2].textContent = `tie: ${tieTally}`
}
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
                win++
                break;
                case 'paper':
                tie++
                break;
                case 'scissor':
                lose++
                break;
            }
        } else if (playerSelection == 'scissor') {
            switch (computerSelection) {
                case 'rock':
                lose++
                break;
                case 'paper':
                win++
                break;
                case 'scissor':
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
}