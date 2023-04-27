document.getElementById('name-search').style.height="40px";

document.getElementById('name-search').style.fontSize="14pt";


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
        welcomeMessage.textContent = 'question 1'
        introMessage.textContent = globalQuestionObject[0].q
        buttonA.textContent = globalQuestionObject[0].answers[0]
        buttonB.textContent = globalQuestionObject[0].answers[1]
        buttonC.textContent = globalQuestionObject[0].answers[2]
        buttonD.textContent = globalQuestionObject[0].answers[3]
        buttonDiv.append(buttonB, buttonC, buttonD)
        buttonA.addEventListener('click', questionTwo)
        buttonB.addEventListener('click', questionTwo)
        buttonC.addEventListener('click', questionTwo)
        buttonD.addEventListener('click', questionTwo)


}

// A = developers (Software Engineer), B = cyber pd (cyber security), C = artist (product design), D = scientist (data scientist)

function questionTwo () {
    welcomeMessage.textContent = 'question 2'
    introMessage.textContent = globalQuestionObject[1].q
    buttonA.textContent = globalQuestionObject[1].answers[0]
    buttonB.textContent = globalQuestionObject[1].answers[1]
    buttonC.textContent = globalQuestionObject[1].answers[2]
    buttonD.textContent = globalQuestionObject[1].answers[3]
    buttonA.addEventListener('click', questionThree)
    buttonB.addEventListener('click', questionThree)
    buttonC.addEventListener('click', questionThree)
    buttonD.addEventListener('click', questionThree)
    
}

// A = developers, B = not developers

function questionThree() {
    welcomeMessage.textContent = 'question 3'
    introMessage.textContent = globalQuestionObject[2].q
    buttonA.textContent = globalQuestionObject[2].answers[0]
    buttonB.textContent = globalQuestionObject[2].answers[1]
    buttonC.textContent = globalQuestionObject[2].answers[2]
    buttonD.textContent = globalQuestionObject[2].answers[3]
    buttonA.addEventListener('click', questionFour)
    buttonB.addEventListener('click', questionFour)
    buttonC.addEventListener('click', questionFour)
    buttonD.addEventListener('click', questionFour)
}

// A = cyber pd, B = not cyber pd

function questionFour() {
    welcomeMessage.textContent = 'question 4'
    introMessage.textContent = globalQuestionObject[3].q
    buttonA.textContent = globalQuestionObject[3].answers[0]
    buttonB.textContent = globalQuestionObject[3].answers[1]
    buttonC.textContent = globalQuestionObject[3].answers[2]
    buttonD.textContent = globalQuestionObject[3].answers[3]
    buttonA.addEventListener('click', questionFive)
    buttonB.addEventListener('click', questionFive)
    buttonC.addEventListener('click', questionFive)
    buttonD.addEventListener('click', questionFive)
}

// A = scientist, B = not scientist

function questionFive() {
    welcomeMessage.textContent = 'question 5'
    introMessage.textContent = globalQuestionObject[4].q
    buttonA.textContent = globalQuestionObject[4].answers[0]
    buttonB.textContent = globalQuestionObject[4].answers[1]
    buttonC.textContent = globalQuestionObject[4].answers[2]
    buttonD.textContent = globalQuestionObject[4].answers[3]
    buttonA.addEventListener('click', questionSix)
    buttonB.addEventListener('click', questionSix)
    buttonC.addEventListener('click', questionSix)
    buttonD.addEventListener('click', questionSix)
}

// A = artists, B = not artists

function questionSix() {
    welcomeMessage.textContent = 'question 6'
    introMessage.textContent = globalQuestionObject[5].q
    buttonA.textContent = globalQuestionObject[5].answers[0]
    buttonB.textContent = globalQuestionObject[5].answers[1]
    buttonC.textContent = globalQuestionObject[5].answers[2]
    buttonD.textContent = globalQuestionObject[5].answers[3]
    buttonA.addEventListener('click', questionSeven)
    buttonB.addEventListener('click', questionSeven)
    buttonC.addEventListener('click', questionSeven)
    buttonD.addEventListener('click', questionSeven)
}

// A = developers, B = artists, C = scientists, D = cyber pd

function questionSeven() {
    welcomeMessage.textContent = 'question 7'
    introMessage.textContent = globalQuestionObject[6].q
    buttonA.textContent = globalQuestionObject[6].answers[0]
    buttonB.textContent = globalQuestionObject[6].answers[1]
    buttonC.textContent = globalQuestionObject[6].answers[2]
    buttonD.textContent = globalQuestionObject[6].answers[3]
    buttonA.addEventListener('click', questionEight)
    buttonB.addEventListener('click', questionEight)
    buttonC.addEventListener('click', questionEight)
    buttonD.addEventListener('click', questionEight)
}

// A = 0.5 points towards both developers & artists, B = 0.5 points towards both scientists & cyber pd



function questionEight() {
    welcomeMessage.textContent = 'question 9'
    introMessage.textContent = globalQuestionObject[7].q
    buttonA.textContent = globalQuestionObject[7].answers[0]
    buttonB.textContent = globalQuestionObject[7].answers[1]
    buttonC.textContent = globalQuestionObject[7].answers[2]
    buttonD.textContent = globalQuestionObject[7].answers[3]
    buttonA.addEventListener('click', questionNine)
    buttonB.addEventListener('click', questionNine)
    buttonC.addEventListener('click', questionNine)
    buttonD.addEventListener('click', questionNine)
}

function questionNine() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[8].q
    buttonA.textContent = globalQuestionObject[8].answers[0]
    buttonB.textContent = globalQuestionObject[8].answers[1]
    buttonC.textContent = globalQuestionObject[8].answers[2]
    buttonD.textContent = globalQuestionObject[8].answers[3]
    buttonA.addEventListener('click', questionTen)
    buttonB.addEventListener('click', questionTen)
    buttonC.addEventListener('click', questionTen)
    buttonD.addEventListener('click', questionTen)
}

function questionTen() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[9].q
    buttonA.textContent = globalQuestionObject[9].answers[0]
    buttonB.textContent = globalQuestionObject[9].answers[1]
    buttonC.textContent = globalQuestionObject[9].answers[2]
    buttonD.textContent = globalQuestionObject[9].answers[3]
    buttonA.addEventListener('click', questionEleven)
    buttonB.addEventListener('click', questionEleven)
    buttonC.addEventListener('click', questionEleven)
    buttonD.addEventListener('click', questionEleven)
}

function questionEleven() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[10].q
    buttonA.textContent = globalQuestionObject[10].answers[0]
    buttonB.textContent = globalQuestionObject[10].answers[1]
    buttonC.textContent = globalQuestionObject[10].answers[2]
    buttonD.textContent = globalQuestionObject[10].answers[3]
    buttonA.addEventListener('click', questionTwelve)
    buttonB.addEventListener('click', questionTwelve)
    buttonC.addEventListener('click', questionTwelve)
    buttonD.addEventListener('click', questionTwelve)
}

function questionTwelve() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[11].q
    buttonA.textContent = globalQuestionObject[11].answers[0]
    buttonB.textContent = globalQuestionObject[11].answers[1]
    buttonC.textContent = globalQuestionObject[11].answers[2]
    buttonD.textContent = globalQuestionObject[11].answers[3]
    buttonA.addEventListener('click', questionThirteen)
    buttonB.addEventListener('click', questionThirteen)
    buttonC.addEventListener('click', questionThirteen)
    buttonD.addEventListener('click', questionThirteen)
}

function questionThirteen() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[12].q
    buttonA.textContent = globalQuestionObject[12].answers[0]
    buttonB.textContent = globalQuestionObject[12].answers[1]
    buttonC.textContent = globalQuestionObject[12].answers[2]
    buttonD.textContent = globalQuestionObject[12].answers[3]
    buttonA.addEventListener('click', questionFourteen)
    buttonB.addEventListener('click', questionFourteen)
    buttonC.addEventListener('click', questionFourteen)
    buttonD.addEventListener('click', questionFourteen)
}

function questionFourteen () {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[13].q
    buttonA.textContent = globalQuestionObject[13].answers[0]
    buttonB.textContent = globalQuestionObject[13].answers[1]
    buttonC.textContent = globalQuestionObject[13].answers[2]
    buttonD.textContent = globalQuestionObject[13].answers[3]
    buttonA.addEventListener('click', questionFifteen)
    buttonB.addEventListener('click', questionFifteen)
    buttonC.addEventListener('click', questionFifteen)
    buttonD.addEventListener('click', questionFifteen)
}

function questionFifteen() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[13].q
    buttonA.textContent = globalQuestionObject[13].answers[0]
    buttonB.textContent = globalQuestionObject[13].answers[1]
    buttonC.textContent = globalQuestionObject[13].answers[2]
    buttonD.textContent = globalQuestionObject[13].answers[3]
    buttonA.addEventListener('click', questionSixteen)
    buttonB.addEventListener('click', questionSixteen)
    buttonC.addEventListener('click', questionSixteen)
    buttonD.addEventListener('click', questionSixteen)
}

function questionSeventeen() {
    welcomeMessage.textContent = 'question 8'
    introMessage.textContent = globalQuestionObject[0].q
    buttonA.textContent = globalQuestionObject[0].answers[0]
    buttonB.textContent = globalQuestionObject[0].answers[1]
    buttonC.textContent = globalQuestionObject[0].answers[2]
    buttonD.textContent = globalQuestionObject[0].answers[3]
    buttonA.addEventListener('click', questionSeventeen)
    buttonB.addEventListener('click', questionSeventeen)
    buttonC.addEventListener('click', questionSeventeen)
    buttonD.addEventListener('click', questionSeventeen)
}

// function questionFour() {
//     welcomeMessage.textContent = 'question 4'
//     introMessage.textContent = globalQuestionObject[0].q
//     buttonA.textContent = globalQuestionObject[0].answers[0]
//     buttonB.textContent = globalQuestionObject[0].answers[1]
//     buttonC.textContent = globalQuestionObject[0].answers[2]
//     buttonD.textContent = globalQuestionObject[0].answers[3]
//     buttonA.addEventListener('click', questionSeventeen)
//     buttonB.addEventListener('click', questionSeventeen)
//     buttonC.addEventListener('click', questionSeventeen)
//     buttonD.addEventListener('click', questionSeventeen)
// }

// function questionFour() {
//     welcomeMessage.textContent = 'question 4'
//     introMessage.textContent = globalQuestionObject[0].q
//     buttonA.textContent = globalQuestionObject[0].answers[0]
//     buttonB.textContent = globalQuestionObject[0].answers[1]
//     buttonC.textContent = globalQuestionObject[0].answers[2]
//     buttonD.textContent = globalQuestionObject[0].answers[3]
//     buttonA.addEventListener('click', questionEighteen)
//     buttonB.addEventListener('click', questionEighteen)
//     buttonC.addEventListener('click', questionEighteen)
//     buttonD.addEventListener('click', questionEighteen)
// }

// function questionFour() {
//     welcomeMessage.textContent = 'question 4'
//     introMessage.textContent = globalQuestionObject[0].q
//     buttonA.textContent = globalQuestionObject[0].answers[0]
//     buttonB.textContent = globalQuestionObject[0].answers[1]
//     buttonC.textContent = globalQuestionObject[0].answers[2]
//     buttonD.textContent = globalQuestionObject[0].answers[3]
//     buttonA.addEventListener('click', questionNineteen)
//     buttonB.addEventListener('click', questionNineteen)
//     buttonC.addEventListener('click', questionNineteen)
//     buttonD.addEventListener('click', questionNineteen)
// }

// function questionFour() {
//     welcomeMessage.textContent = 'question 4'
//     introMessage.textContent = globalQuestionObject[0].q
//     buttonA.textContent = globalQuestionObject[0].answers[0]
//     buttonB.textContent = globalQuestionObject[0].answers[1]
//     buttonC.textContent = globalQuestionObject[0].answers[2]
//     buttonD.textContent = globalQuestionObject[0].answers[3]
//     buttonA.addEventListener('click', questionTwenty)
//     buttonB.addEventListener('click', questionTwenty)
//     buttonC.addEventListener('click', questionTwenty)
//     buttonD.addEventListener('click', questionTwenty)
// }


// function questionSeven() {
//     welcomeMessage.textContent = 'question #'
//     introMessage.textContent = 'question'
//     buttonA.textContent = ''
//     buttonB.textContent = ''
//     buttonA.addEventListener('click', questionSeven)
//     buttonB.addEventListener('click', questionSeven)
// }
