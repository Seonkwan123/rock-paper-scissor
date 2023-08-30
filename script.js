// Select intro text and print them out individually
let introTextFirst = 'Welcome to Rock-Paper-Scissor game!'
let introTextSecond = "Press 'Start Game' button to start the game"
let speed = 40; // This speed is the speed that will print out the text one by one

// Set initial tallies
let winTally =0;
let loseTally = 0;
let tieTally = 0;

// Initialize computerAnswer outside of the function to refer this variable globally
let computerAnswer;
// Set intro1 and intro2 to class name for intro1 & intro2
const intro1 = document.querySelector('.intro1').getAttribute('class')
const intro2 = document.querySelector('.intro2').getAttribute('class')

const description = document.querySelector('.description') 
// select all buttons, except for restart button. Restart button is not a node not when all buttons are selected as it has not been appended yet.
const allButtons = document.querySelectorAll('button') 
// Select start button and add eventListener to start the game when clicked.
const startBtn = document.querySelector('.startBtn')
const bodyChildrenElements = document.querySelectorAll('body > *'); // This selects all child nodes of body
startBtn.addEventListener('click', startGame); // When startButton is selected, all elements of body child gets class 'active'

// Reset button
const restartButton = document.querySelector('.restartButton') // Select div that will have reestart button
const restartBtn = document.createElement('button') // set const variable as a restart button
restartBtn.classList.add('restartBtn') // Add class to restart button
restartBtn.textContent = 'Restart' // Add text to the restart button

// Select player buttons and computer buttons separately using querySelector
const playerButtons = document.querySelectorAll(' .player-buttons > button')
const computerButtons = document.querySelectorAll(' .computer-buttons > button')
// Select score keeper child divs
const scoreKeeper = document.querySelectorAll('.score-keeper > div')

// invoke printLetter first
printLetters(introTextFirst, intro1)

// This setTimeout is for the second intro below the start button.
setTimeout (printLetters, 2000, introTextSecond, intro2)

// input HTML Text into score keeper child divs
scoreKeeper.forEach(score => {
    score.textContent = `${score.getAttribute('class')}: ${winTally}`
})

// eventListener will have callback function that plays round when clicked, as well as
// update the points
playerButtons.forEach(button => {
    button.addEventListener('click', () => {
    let userInput = button.getAttribute('class')
    clickButton(button)
    game(userInput)
    buttonDelay (allButtons)
    if (computerAnswer == 'rock') clickButton(computerButtons[0])
    if (computerAnswer == 'paper') clickButton(computerButtons[1])
    if (computerAnswer == 'scissor') clickButton(computerButtons[2])
})
})


// Add visual for what was selected for both the user and the computer
const selection = document.querySelectorAll('.player-selection,.computer-selection')
// Add initial statement
selection[0].textContent = `Player Selected:`
selection[1].textContent = `Computer Selected:`

// Write a function that will selected CSS style that should be applied when button is clicked 
function clickButton (buttonclicked) {
    buttonclicked.classList.add('selected')
    setTimeout((buttonclickedReverse) => 
    {buttonclickedReverse.classList.remove('selected')},1000, buttonclicked)
}


function printLetters(text,className, i=0) { //This function takes two arguments. i is always initially set to zero only when it is first invoked.
    if (i < text.length) {
    document.querySelector('.'+className).textContent += text[i]
    i++
    setTimeout(printLetters, speed, text, className, i)
}
}

// Add class to unhide the elements that were hidden when start button is pressed. 
function startGame () {
    setTimeout(() =>bodyChildrenElements.forEach(element => {
    element.classList.add('active')
    }), 100)
}

function reset () {
    window.location.reload(true);
}

function buttonDelay (buttonNodeList) {
    buttonNodeList.forEach (button => {
        button.disabled = true;
        setTimeout(() => {
        button.disabled = false;
        }, 1000)
    })
}


// Wite a function called 'game' that will take userInput and compare with computer selection. This is a callback function when any buttons are pressed.
function game (userSelection) { 
    computerAnswer = getComputerChoice()
    let result = playRound(userSelection, computerAnswer);
    selection[0].textContent = `Player Selected: ${userSelection}` // This will display player selection
    selection[1].textContent = `Computer Selected: ${computerAnswer}` // This will display computer selection
    if (result === 'win' && winTally < 5) {
        winTally ++
        scoreKeeper[0].textContent = `win: ${winTally}`
        description.textContent = 'You win!'
    } else if (result === 'lose' && loseTally < 5) {
        loseTally ++
        scoreKeeper[1].textContent = `lose: ${loseTally}`
        description.textContent = 'You lose :('
    } else if (result === 'tie') {
        tieTally ++
        scoreKeeper[2].textContent = `tie: ${tieTally}`
        description.textContent = 'You tied'
    }
    if (winTally >= 5) {
        allButtons.forEach(button => {
            button.disabled = true;
            button.style.pointerEvents = 'none'
        })
        description.textContent = "Wow, you actually won. I'm very surprised"
        restartButton.appendChild(restartBtn)
        restartBtn.addEventListener('click', reset)
        }
        if (loseTally >= 5) {
            allButtons.forEach(button => {
                button.disabled = true;
                button.style.pointerEvents = 'none'
            })
            description.textContent = "You suck a$$. Go kill yourself"
            restartButton.appendChild(restartBtn)
            restartBtn.addEventListener('click', reset)
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
