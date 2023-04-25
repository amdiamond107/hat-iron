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
        nextButton.textContent = 'go ogogogogo'
        formDiv.append(welcomeMessage, introMessage, nextButton)
}

