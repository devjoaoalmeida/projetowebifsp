import home from "./pages/home.js";
import lista_servicos from "./pages/lista_servicos.js";
import perfil_cliente from "./pages/perfil_cliente.js";
import perfil_empresa from "./pages/perfil_empresa.js";
import sobre from "./pages/sobre.js";

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
            case "#perfil_cliente":
                main.appendChild(perfil_cliente());
                break;
            case "#perfil_empresa":
                main.appendChild(perfil_empresa());
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

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("js/pwa/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  

