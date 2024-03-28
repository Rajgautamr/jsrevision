const computerChoiceDisplay = document.getElementById('Computer-choice');
const userchoice = document.getElementById('user-choice');
const resultdisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userclick
let computerChoice
let result
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userclick = e.target.id
    userchoice.innerHTML = userclick
    generateRandomchoice()
    getresult()
}))
function generateRandomchoice() {
    const randomnumber = Math.floor(Math.random() * possibleChoice.length +1);
    if  (randomnumber === 1) {
        computerChoice = 'rock'
    }
    if  (randomnumber === 2) {
        computerChoice = 'paper'
    }
    if  (randomnumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}
function getresult() {
    if (computerChoice === userclick){
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userclick ==='paper'){
        result = 'You Win !'
    }
    if (computerChoice === 'paper' && userclick === 'scissors'){
        result = 'You Win !'
    }
    if (computerChoice ==='scissors' && userclick ==='rock'){
        result = 'You Win !'
    }
    if (computerChoice === 'rock' && userclick ==='scissors'){
        result = 'You Lost !'
    }
    if (computerChoice === 'paper' && userclick === 'rock'){
        result = 'You Lost !'
    }
    if (computerChoice ==='scissors' && userclick ==='paper'){
        result = 'You Lost !'
    }
    resultdisplay.innerHTML = result
}
