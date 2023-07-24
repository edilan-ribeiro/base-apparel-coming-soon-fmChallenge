const buttonSubmit = document.getElementById('btn-submit')
const emailField = document.getElementById('emailField')
const errorIcon = document.getElementById('error-icon')
const errorAlert = document.getElementById('error-alert')
const thanksItem = document.getElementById('thanks-item')




buttonSubmit.addEventListener('click', function(formSend){
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    formSend.preventDefault()

    emailField.addEventListener('change', function formFixed() {

        emailField.classList.remove('email-error')
        emailField.classList.add('email-working')
    })

    if (emailField.value !== "" && regexExp.test(emailField.value) && emailField.value.length > 6) {
        buttonSubmit.classList.add('hide')
        emailField.classList.add('hide')
        thanksItem.classList.add('show')
       
        errorIcon.classList.add('hide')
        errorAlert.classList.add('hide')

        formFixed()


    }  else  {    

        emailField.classList.remove('email-working')
        emailField.classList.add('email-error')

        errorIcon.classList.remove('hide')
        errorAlert.classList.remove('hide')
    }


})