import login from './login/login.js';
import cad_login from './login/cad_login.js';
import senha from './login/senha.js';

const div = document.querySelector("#modal");

const init = () => {
    window.addEventListener("hashchange", () => {
        div.innerHTML = "";
        switch(window.location.hash){
            case "#login":
                div.appendChild(login());
                break;
            case "#cad_login":
                div.appendChild(cad_login());
                break;
            case "#senha":
                div.appendChild(senha());
                break;
        }
    })
}

window.addEventListener("load", () => {
    init();
})