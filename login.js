import { renderWelcome } from "./signup.js";
import { username , password } from "./index.js";

const key = password.value.trim();


const form = document.getElementById('form');
const password2 = document.getElementById('password');
export const username2 = document.getElementById('username');

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


export const validateInputs = () =>{
    let isValid = true;
    const usernameValue = username2.value.trim();
    const passwordValue = password2.value.trim();

    if(passwordValue === 'tanitoluwa'){
        setSuccess(password2)
    }else if(passwordValue.length < 8){
        setError(password2, 'Password must be at least 8 characters');
        isValid = false;
    }else if(passwordValue === ''){
        setError(password2, 'Password is required');
        isValid = false;
    }else{
        setError(password2, 'Enter the correct password');
        isValid = false;
    }
    
    
    if(usernameValue === ''){
        setError(username2, 'Username is required');
        isValid = false;
    }else{
        setSuccess(username2);
    }
    return isValid;
}



