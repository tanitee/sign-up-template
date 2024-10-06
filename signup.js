import { username } from "./index.js";
export function renderWelcome(){
    const value = username.value.trim();
    const welcomePagehtml = `
        <div><h1 >Welcome, <br>${value} !</h1></div>
        <div><p>Your account number is:2369917396</is:2369917396></p></div>
        <div>
            <a href="index.html"><button class="sign-up">Logout</button></a>
        </div>
        <div>

        </div>
    `;
    
    console.log(value);

    document.querySelector('.welcome-area').innerHTML = welcomePagehtml;
}
