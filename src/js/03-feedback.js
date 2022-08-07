import throttle from "lodash.throttle";

const refs = { // refs to html elements
    form : document.querySelector('form'),
    textarea: document.querySelector('textarea[name="message"]'),
    email: document.querySelector('input[name="email"]'),
};

const STORAGE_KEY = "feedback-form-state"; // const for all needed usage

const formData = {}; // object that will appear all input in form

refs.form.addEventListener('input',throttle(inputChange, 500));

refs.form.addEventListener('submit', onFormSubmit);

savedData(); // here we show data from localStorage if they even exist

function inputChange (e){   // here we save user data in localStorage in the obj way
    formData[e.target.name] = e.target.value;

    const userData = localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    return userData;
};

function onFormSubmit (e){   // we prewent reboot of page, and parsing data from localStorage, after parse we delete data from LS
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function savedData() {  // we show data from local storage if page was accidantly reboot
    const lastData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(lastData){
        refs.textarea.value = lastData.message;
        refs.email.value = lastData.email;
    };
};