import home from "../pages/home/home.js";
import sobre from "../pages/sobre/sobre.js";
import lista_servicos from "../pages/lista_servicos/lista_servicos.js";
import perfil from "../pages/perfil/perfil.js"

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "":
                main.appendChild(home());
                break;
            case "#lista_servico":
                main.appendChild(lista_servicos());
                break;
            case "#sobre":
                main.appendChild(sobre());
                break;
            case "#perfil":
                main.appendChild(perfil());
                break;
            default:
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})



