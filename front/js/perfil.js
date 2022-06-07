function user(){
    let user = document.getElementById('usercomum_conteudo');
    if (user) {
        user.style.display="flex";
        document.getElementById('usercliente_conteudo').style.display='none';
        document.getElementById('userempresa_conteudo').style.display='none';
    } 
}

function cliente(){
    let cliente = document.getElementById('usercliente_conteudo');
    if (cliente) {
        cliente.style.display="flex";
        document.getElementById('usercomum_conteudo').style.display='none';
        document.getElementById('userempresa_conteudo').style.display='none';
    }
}

function empresa(){
    let empresa = document.getElementById('userempresa_conteudo');
    if (empresa) {
        empresa.style.display="flex";
        document.getElementById('usercomum_conteudo').style.display='none';
        document.getElementById('usercliente_conteudo').style.display='none';
    }
}
