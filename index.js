import { renderWelcome } from "./signup.js";

const form = document.getElementById('form');
const email = document.getElementById('email');
export const password = document.getElementById('password');
export const username = document.getElementById('username');
const firstName = document.getElementById('firstName');

form.addEventListener('submit' , e =>{
    e.preventDefault();

    if(validateInputs()){
        document.getElementById('form').style.display = 'none';
        renderWelcome();
        /*document.querySelector('.js-signup-button').addEventListener('click' , ()=>{
            renderWelcome();
            document.getElementById('form').style.display = 'none';
       
        })*/
    }
})

function setError (element, message){
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;

    input.classList.add('error');
    input.classList.remove('success');
}

function setSuccess (element){
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');
    errorDisplay.innerText = '';

    input.classList.add('success');
    input.classList.remove('error');
}

const isValidEmail = email =>{
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return reg.test(String(email).toLowerCase());
}


export const validateInputs = () =>{
    let isValid = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const firtNameValue = firstName.value.trim();

    if(passwordValue === ''){
        setError(password, 'Password is required');
        isValid = false;
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
    }else{
        setSuccess(password);
    }
    

    if(emailValue === ''){
        setError(email, 'Email is required');
        isValid = false;
    }else if(!isValidEmail(emailValue)){
        setError(email, ' Valid email is required');
        isValid = false;
    }else {
        setSuccess(email);
    }
    

    if(firtNameValue === ''){
        setError(firstName, 'First name is required');
        isValid = false;
    }else{
        setSuccess(firstName);
    }

    if(usernameValue === ''){
        setError(username, 'Username is required');
        isValid = false;
    }else{
        setSuccess(username);
    }
    return isValid;
}


function saveToStorage(){
    localStorage.setItem('username',username.value)
}
function loadFromStorage(){
    const storedUsername = localStorage.getItem('username');
    if(storedUsername){
        username.value = storedUsername; 
        }
}