import throttle from "lodash.throttle";

const refs = { // refs to html elements
    form : document.querySelector('form'),
};

const STORAGE_KEY = "feedback-form-state"; // const for all needed usage

const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = storageData ?? {}; // object that will appear all input in form
 

refs.form.addEventListener('input',throttle(inputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

savedData(); // here we show data from localStorage if they even exist

function inputChange (e){   // here we save user data in localStorage in the obj way
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit (e){   // we prewent reboot of page, and parsing data from localStorage, after parse we delete data from LS
    e.preventDefault();

    if(e.currentTarget.email.value === ''|| e.currentTarget.message.value === ''){
        alert('We cannot find you if you did not give us information about yourself, so please, FBI need it, fill the lines');
        return;
    };

    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};    
};

function savedData() {  // we show data from local storage if page was accidantly reboot
    if(storageData){
        refs.form.elements.message.value = storageData.message;
        refs.form.elements.email.value = storageData.email;
    };
};