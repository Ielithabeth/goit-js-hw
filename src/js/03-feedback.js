import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const message = document.querySelector("textarea");
const emailInput = document.querySelector("input");
const STORAGE_KEY = "feedback-form-state";

let formData = {};

restoreInputValue();
form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormInput), 500);

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreInputValue() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    if (savedFormData) {
        formData = parsedFormData;
        message.value = formData.message || "";
        emailInput.value = formData.email || "";
    } 
}