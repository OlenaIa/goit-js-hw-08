import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');

let objOfValue = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
        email: '',
        message: ''
}
    
const { email, message } = formRef.elements;

email.value = objOfValue.email.trim();
message.value = objOfValue.message.trim();

formRef.addEventListener('input', throttle(onInputForm, 500));
formRef.addEventListener('submit', onSubmitForm);

function onInputForm(event) {
    objOfValue = {
        email: email.value.trim(),
        message: message.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(objOfValue));
}

function onSubmitForm(event) {
    event.preventDefault();

    localStorage.removeItem('feedback-form-state');

    if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }
 
    console.log(`User's email: ${email.value.trim()} \nmessage: ${message.value.trim()}`);

    event.currentTarget.reset();
}