document.getElementById('name-search').style.height="40px";

document.getElementById('name-search').style.fontSize="14pt";


const nameForm = document.getElementById('name-form')
nameForm.addEventListener('submit', setUsername)
const formDiv = document.getElementById('name-entry')
let username = undefined

function setUsername(e) {
    e.preventDefault()
    let nameInput = document.getElementById('name-search').value
    username = nameInput
    console.log(username)
    nameForm.innerHTML = ''
    hideDetails()

    // username ? hideDetails : enterUsername
}


const welcomeMessage = document.createElement('h3');
const introMessage = document.createElement('h5');
const buttonA = document.createElement('btn')
const buttonB = document.createElement('btn')
const buttonC = document.createElement('btn')
const buttonD = document.createElement('btn')
function hideDetails() {

    nameForm.innerHTML = '';
    introMessage.setAttribute('id', 'intro-message')
    buttonA.setAttribute('id', 'next-btn')
    welcomeMessage.setAttribute('id','welcome-message');
    buttonA.textContent = 'i am ready to know my future'
    welcomeMessage.textContent = `welcome brother / sister ${username}`
    introMessage.textContent = 'today you will be sorted into your respective bootcamps.  Before you lie four paths..and while each differs in nature [finish later] '

    buttonA.addEventListener('click', questionOne)
    


    formDiv.append(welcomeMessage, introMessage, buttonA)
    
}

function questionOne () {
        welcomeMessage.textContent = 'question 1'
        introMessage.textContent = ''
        buttonA.textContent = ''
        buttonB.textContent = ''
        buttonC.textContent = ''
        buttonD.textContent = ''
        formDiv.append(welcomeMessage, introMessage, buttonA, buttonB, buttonC, buttonD)
        buttonA.addEventListener('click', questionTwo)
        buttonB.addEventListener('click', questionTwo)
        buttonC.addEventListener('click', questionTwo)
        buttonD.addEventListener('click', questionTwo)
}

// A = developers (Software Engineer), B = cyber pd (cyber security), C = artist (product design), D = scientist (data scientist)

function questionTwo () {
    welcomeMessage.textContent = 'question 2'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonA.addEventListener('click', questionThree)
    buttonB.addEventListener('click', questionThree)
}

// A = developers, B = not developers

function questionThree() {
    welcomeMessage.textContent = 'question 3'
    introMessage.textContent = 'do you consider yourself to be a protector of others'
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonA.addEventListener('click', questionFour)
    buttonB.addEventListener('click', questionFour)
}

// A = cyber pd, B = not cyber pd

function questionFour() {
    welcomeMessage.textContent = 'question 4'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonA.addEventListener('click', questionFour)
    buttonB.addEventListener('click', questionFour)
}

// A = scientist, B = not scientist

function questionFive() {
    welcomeMessage.textContent = 'question 5'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonA.addEventListener('click', questionFive)
    buttonB.addEventListener('click', questionFive)
}

// A = artists, B = not artists

function questionSix() {
    welcomeMessage.textContent = 'question 6'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonC.textContent = ''
    buttonD.textContent = ''
    buttonA.addEventListener('click', questionSix)
    buttonB.addEventListener('click', questionSix)
    buttonC.addEventListener('click', questionSix)
    buttonD.addEventListener('click', questionSix)
}

// A = developers, B = artists, C = scientists, D = cyber pd

function questionSeven() {
    welcomeMessage.textContent = 'question 7'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonA.addEventListener('click', questionSeven)
    buttonB.addEventListener('click', questionSeven)
}

// A = 0.5 points towards both developers & artists, B = 0.5 points towards both scientists & cyber pd

function questionEight() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = ''
    buttonA.textContent = ''
    buttonB.textContent = ''
    buttonC.textContent = ''
    buttonD.textContent = ''
    buttonA.addEventListener('click', questionEight)
    buttonB.addEventListener('click', questionEight)
    buttonC.addEventListener('click', questionEight)
    buttonD.addEventListener('click', questionEight)
}

// function questionSeven() {
//     welcomeMessage.textContent = 'question #'
//     introMessage.textContent = 'question'
//     buttonA.textContent = ''
//     buttonB.textContent = ''
//     buttonA.addEventListener('click', questionSeven)
//     buttonB.addEventListener('click', questionSeven)
// }


