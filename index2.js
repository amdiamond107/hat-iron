document.getElementById('name-search').style.height="40px";

document.getElementById('name-search').style.fontSize="14pt";

let developer = 0
let cyberPd = 0
let artist = 0
let scientist = 0

function developerCount(n){
    developer = developer + n
    console.log(developer)
    
}

function cyberPdCount(n){
    cyberPd += n
    console.log(cyberPd)
    
}

function artistCount(n){
    artist += n
    console.log(artist)
   
}

function scientistCount(n){
    scientist += n
    console.log(scientist)

}

const nameForm = document.getElementById('name-form')
nameForm.addEventListener('submit', setUsername)
const formDiv = document.getElementById('name-entry')
const buttonDiv = document.getElementById('button-div')
let username = undefined
let globalQuestionObject

//*.*.//,, fetches db.json file and assigns its value to a global variable ,,//*.*//
fetch('http://localhost:3000/questions')
    .then(rsp => rsp.json())
    .then(questionsArray => globalize(questionsArray))


//*.*.//,. attributes user input to variable 'username' .,,//*.*//
function setUsername(e) {
    e.preventDefault()
    let nameInput = document.getElementById('name-search').value
    username = nameInput
    console.log(username)
    nameForm.innerHTML = ''
    toWelcomeScreen()

    // username ? toWelcomeScreen : enterUsername
}

//*.*.//,. globalize attribute ,.//*.*//
function globalize(questionsArray) {
        console.log(questionsArray[5].q);
    return globalQuestionObject = questionsArray 

}
const welcomeMessage = document.createElement('h3');
const introMessage = document.createElement('h5');


//*.*.// button creation + id attribution .//*.*//
const buttonA = document.createElement('btn')
buttonA.setAttribute('id', 'next-btn')
const buttonB = document.createElement('btn')
buttonB.setAttribute('id', 'b-btn')
const buttonC = document.createElement('btn')
buttonC.setAttribute('id', 'c-btn')
const buttonD = document.createElement('btn')
buttonD.setAttribute('id', 'd-btn')

//removes name form, appends welcome screen
function toWelcomeScreen() {

    nameForm.innerHTML = '';
    introMessage.setAttribute('id', 'intro-message')
    buttonA.setAttribute('id', 'next-btn')
    welcomeMessage.setAttribute('id','welcome-message');
    buttonA.textContent = 'i am ready to know my future'
    welcomeMessage.textContent = `welcome brother / sister ${username}`
    introMessage.textContent = 'today you will be sorted into your respective bootcamps.  Before you lie four paths..and while each differs in nature [finish later] '

    buttonA.addEventListener('click', questionOne)
    


    buttonDiv.append(welcomeMessage, introMessage, buttonA)
    
}

function questionOne () {
    const buttons = buttonDiv.getElementsByTagName('btn')
        welcomeMessage.textContent = 'question 1'
        introMessage.textContent = globalQuestionObject[0].q
        buttonA.textContent = globalQuestionObject[0].answers[0]
        buttonB.textContent = globalQuestionObject[0].answers[1]
        buttonC.textContent = globalQuestionObject[0].answers[2]
        buttonD.textContent = globalQuestionObject[0].answers[3]
        buttonDiv.append(buttonB, buttonC, buttonD)
        buttonA.addEventListener('click', () => {
            developerCount(1);
            buttons[3].remove();
            buttons[2].remove();
            questionTwo()})
        buttonB.addEventListener('click', () => {
            cyberPdCount(1)
            buttons[3].remove();
            buttons[2].remove();
            questionTwo()})
        buttonC.addEventListener('click', () => {
            artistCount(1)
            buttons[3].remove();
            buttons[2].remove();
            questionTwo()})
        buttonD.addEventListener('click',  () => {
            scientistCount(1);
            buttons[3].remove();
            buttons[2].remove();
            questionTwo()})


}

// A = developers (Software Engineer), B = cyber pd (cyber security), C = artist (product design), D = scientist (data scientist)

function questionTwo () {
    const buttons = buttonDiv.getElementsByTagName('btn')
    
    welcomeMessage.textContent = 'question 2'
    introMessage.textContent = globalQuestionObject[1].q
    buttonA.textContent = globalQuestionObject[1].answers[0]
    buttonB.textContent = globalQuestionObject[1].answers[1]
    buttonA.addEventListener('click', () => {
        developerCount(1);
        questionThree()})
    buttonB.addEventListener('click', () => {
        developerCount(-1);
        questionThree()})
}

// A = developers, B = not developers

function questionThree() {
    welcomeMessage.textContent = 'question 3'
    introMessage.textContent = globalQuestionObject[2].q
    buttonA.textContent = globalQuestionObject[2].answers[0]
    buttonB.textContent = globalQuestionObject[2].answers[1]
    buttonA.addEventListener('click', questionFour)
    buttonB.addEventListener('click', questionFour)
    buttonA.addEventListener('click', () => {
        cyberPdCount(1);
        questionFour()})
    buttonB.addEventListener('click', () => {
        cyberPdCount(-1);
        questionFour()})
}

// A = cyber pd, B = not cyber pd

function questionFour() {
    welcomeMessage.textContent = 'question 4'
    introMessage.textContent = globalQuestionObject[3].q
    buttonA.textContent = globalQuestionObject[3].answers[0]
    buttonB.textContent = globalQuestionObject[3].answers[1]
    buttonA.addEventListener('click', () => {
        scientistCount(1);
        questionFive()})
    buttonB.addEventListener('click', () => {
        scientistCount(-1);
        questionFive()})
}

// A = scientist, B = not scientist

function questionFive() {
    welcomeMessage.textContent = 'question 5'
    introMessage.textContent = globalQuestionObject[4].q
    buttonA.textContent = globalQuestionObject[4].answers[0]
    buttonB.textContent = globalQuestionObject[4].answers[1]
    buttonA.addEventListener('click', () => {
        artistCount(1);
        questionSix()})
    buttonB.addEventListener('click', () => {
        artistCount(-1);
        questionSix()})
}

// A = artists, B = not artists

function questionSix() {
    welcomeMessage.textContent = 'question 6'
    introMessage.textContent = globalQuestionObject[5].q
    buttonA.textContent = globalQuestionObject[5].answers[0]
    buttonB.textContent = globalQuestionObject[5].answers[1]
    buttonC.textContent = globalQuestionObject[5].answers[2]
    buttonD.textContent = globalQuestionObject[5].answers[3]
    buttonA.addEventListener('click', () => {
        developerCount(1);
        questionSeven()})
    buttonB.addEventListener('click', () => {
        artistCount(1);
        questionSeven()})
    buttonC.addEventListener('click', () => {
        scientistCount(1);
        questionSeven()})
    buttonD.addEventListener('click',  () => {
        cyberPdCount(1);
        questionSeven()})
}

// A = developers, B = artists, C = scientists, D = cyber pd

function questionSeven() {
    welcomeMessage.textContent = 'question 7'
    introMessage.textContent = globalQuestionObject[6].q
    buttonA.textContent = globalQuestionObject[6].answers[0]
    buttonB.textContent = globalQuestionObject[6].answers[1]
    buttonA.addEventListener('click', () => {
        developerCount(0.5);
        artistCount(0.5);
        questionSeven()})
    buttonB.addEventListener('click', () => {
        scientistCount(0.5);
        cyberPdCount(0.5);
        questionSeven()})

// A = 0.5 points towards both developers & artists, B = 0.5 points towards both scientists & cyber pd


function questionEight() {
    welcomeMessage.textContent = 'question 9'
    introMessage.textContent = globalQuestionObject[7].q
    buttonA.textContent = globalQuestionObject[7].answers[0]
    buttonB.textContent = globalQuestionObject[7].answers[1]
    buttonC.textContent = globalQuestionObject[7].answers[2]
    buttonD.textContent = globalQuestionObject[7].answers[3]
    buttonA.addEventListener('click', () => {
        scientistCount(1);
        questionSeven()})
    buttonB.addEventListener('click', () => {
        artistCount(1);
        questionSeven()})
    buttonC.addEventListener('click', () => {
        cyberPdCount(1);
        questionSeven()})
    buttonD.addEventListener('click',  () => {
        Count(1);
        questionSeven()})
}