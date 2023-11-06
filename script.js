const subscribeBtn = document.querySelector('.subscribe-btn');
const userEmail = document.getElementById('email')
const leftPart = document.querySelector('.left-part')
const rightPart = document.querySelector('.right-part')
const successState = document.querySelector('.success-state')
const container = document.querySelector('.container')

subscribeBtn.onclick = function(){
    const emailPattern = /^[\w.-]+@gmail\.com$/;

    if (emailPattern.test(userEmail.value)) {
        leftPart.style.display = 'none'
        rightPart.style.display = 'none'
        successState.style.display = 'block'
        container.classList.add('success')
        handleUserMail(userEmail.value)
    } else {
        userEmail.parentElement.classList.add('error')
    }

}

function handleUserMail(mail){
    document.querySelector('.user-mail').innerText = mail
}

document.querySelector('.dismiss-btn').onclick = function(){
    document.location.reload()
}