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

function hideDetails() {

    nameForm.innerHTML = '';
    const welcomeMessage = document.createElement('h3');
    welcomeMessage.setAttribute('id','welcome-message');
    welcomeMessage.textContent = `welcome brother / sister ${username}`
    
    formDiv.appendChild(welcomeMessage)
}


