let input = document.getElementById('email')
let errorMessage = document.querySelector('.error-message')
let form = document.querySelector('.content-form')

function removerErros() {
    errorMessage.classList.add('none')
    input.classList.remove('error-input')
}

form.addEventListener('submit', (e) => {
    removerErros()
    let regexParaValidarEmail = "^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    if(!input.value.match(regexParaValidarEmail)) {
        errorMessage.classList.remove('none')
        input.classList.add('error-input')
    }
    e.preventDefault()
})