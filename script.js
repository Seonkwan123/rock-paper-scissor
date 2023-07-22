// Select body using querySelector to append div and buttons
const body = document.querySelector('body')
// Create a div that will contaim all buttons
const div = document.createElement('div');
// Create each button element
const button1 = document.createElement('button')
const button2= document.createElement('button')
const button3 = document.createElement('button')
// Append both div and its child
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
body.appendChild(div);
// Add three texts
button1.innerText = 'Rock'
button2.innerText = 'Paper'
button3.innerText = 'Scissor'

// select all three buttons
const buttons = document.querySelectorAll('button');
// for of to loop through all buttons to add class
for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add(`button${i+1}`)
}




// Wite a function called 'game' that will play number of rounds specified.
function game (numOfRounds) { 
    let computerTally = 0;
    let personTally = 0;
    let tieTally = 0;
    // Create for loop to play number of rounds 
    for (let i = 0; i < numOfRounds; i++) {
        // Use prompt to get user's input
        let playerAnswer = prompt("Please select between rock, paper, or scissor.")
        playerAnswer = playerAnswer.toLowerCase();
        // Use while loop to make check if the input is valid or not. If not valid, create prompt until correct input is given.
            while (playerAnswer !== 'rock' && playerAnswer !== 'paper' && playerAnswer !== 'scissor') {
                playerAnswer = prompt ('incorrect input! Please provide a correct input');
                }
        // Invoke function to get result of computer
        let computerAnswer  = getComputerChoice();
        let result = playRound(playerAnswer,computerAnswer)
        if (result === 'win') personTally++
        if (result === 'lose') computerTally++
        if (result === 'tie') tieTally++
    }
    alert (`   you won ${personTally}
        computer won ${computerTally}
        you tied ${tieTally}`)
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