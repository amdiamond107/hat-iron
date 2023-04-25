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
const nextButton = document.createElement('btn')

function hideDetails() {

    nameForm.innerHTML = '';
    introMessage.setAttribute('id', 'intro-message')
    nextButton.setAttribute('id', 'next-btn')
    welcomeMessage.setAttribute('id','welcome-message');
    nextButton.textContent = 'i am ready to know my future'
    welcomeMessage.textContent = `welcome brother / sister ${username}`
    introMessage.textContent = 'today you will be sorted into your respective bootcamps.  Before you lie four paths..and while each differs in nature [finish later] '

    nextButton.addEventListener('click', questionOne)


    formDiv.append(welcomeMessage, introMessage, nextButton)
    
}

function questionOne () {
        welcomeMessage.textContent = "question 1"
        introMessage.textContent = 'whos ya daddy?'
        nextButton.textContent = 'its u'
        formDiv.append(welcomeMessage, introMessage, nextButton)
        nextButton.addEventListener('click', questionTwo)
}

function questionTwo () {
    welcomeMessage.textContent = "question 2"
    introMessage.textContent = 'do we see how to make question 3? claire? andrew? hello?'
    nextButton.textContent = 'yes dan we see'
    nextButton.addEventListener('click', questionThree)
}

function questionThree() {
    welcomeMessage.textContent = 'great. in that case the future is ours, sky is limit, etc'
    introMessage.textContent = ''
    nextButton.textContent = "now it's my turn isn't it?"
    nextButton.addEventListener('click', questionFour)
}

function questionFour() {
    welcomeMessage.textContent = 'yes'
    nextButton.textContent = '*nodding* yes'
}