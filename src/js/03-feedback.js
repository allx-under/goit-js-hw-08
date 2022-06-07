import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const localKeyToSave = 'feedback-form-state';

let formContentToSave = { email:"" , message:"" };

addEventListener("DOMContentLoaded", checkLocalStorage);
formEl.addEventListener('input', throttle(onInputSavedToLocalStorage, 500));
formEl.addEventListener('submit', onFormSubmit);



function onInputSavedToLocalStorage(e) {
    formContentToSave[e.target.name] = e.target.value;
    const savedLocalData = localStorage.setItem(localKeyToSave, JSON.stringify(formContentToSave));
}


function checkLocalStorage() {
        if (localStorage.getItem(localKeyToSave)) {
        try {
            const parsedLocalData = JSON.parse(localStorage.getItem(localKeyToSave))
            inputEl.value = parsedLocalData.email;
            textareaEl.value = parsedLocalData.message;
            formContentToSave.email = inputEl.value;
            formContentToSave.message = textareaEl.value;
            const savedLocalData = localStorage.setItem(localKeyToSave, JSON.stringify(formContentToSave))
           
       } catch (error) {
           console.log("Error with parsing")
       } 
    } 

}

function onFormSubmit(e) {
    e.preventDefault();
    const savedLocalData = localStorage.getItem(localKeyToSave)
    try {
        const parsedLocalData = JSON.parse(savedLocalData)
        console.log(parsedLocalData)
    } catch (error) {
        console.log("Submit error with parsing")
    }
        e.target.reset();
        localStorage.removeItem(localKeyToSave)
};


