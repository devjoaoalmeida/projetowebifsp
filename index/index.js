import home from "../pages/home/home.js";
import sobre from "../pages/sobre/sobre.js";
import detalhe_servico from "../pages/detalhe_servico/detalhe_servico.js";
import lista_servicos from "../pages/lista_servicos/lista_servicos.js";
import perfil from "../pages/perfil/perfil.js"
import servicos_cad_perfil from "../pages/servicos_cad_perfil/servicos_cad_perfil.js";

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
            default:
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})



