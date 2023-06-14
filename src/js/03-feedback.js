import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const FEEDBACKFORM_KEY = "feedback-form-state";
let formValue = {};

form.addEventListener('input', throttle(chaseFormInput, 500));
form.addEventListener('submit', cleanInputAndLocalStorage);
populateTextArea()


function chaseFormInput(evt) {
    formValue[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACKFORM_KEY, JSON.stringify(formValue));
}

function cleanInputAndLocalStorage(evt) {
    evt.preventDefault();
    console.log(formValue);
    localStorage.removeItem(FEEDBACKFORM_KEY);
    evt.currentTarget.reset()
    formValue = {};
    
}

function populateTextArea() {
    let formData = JSON.parse(localStorage.getItem(FEEDBACKFORM_KEY)) || {};
    formValue = formData;
    if (formData) {
    if (formData.email) {
        form.elements.email.value = formData.email;
    }
    if (formData.message) {
        form.elements.message.value = formData.message;
    }
    }
}
const parsedItem = JSON.parse(localStorage.getItem(FEEDBACKFORM_KEY));