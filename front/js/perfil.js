function user(){
    let user = document.getElementById('usercomum_conteudo');
    if (user) {
        user.style.display="flex";
        document.getElementById('usercliente_conteudo').style.display='none';
        document.getElementById('userempresa_conteudo').style.display='none';

        document.getElementById('useropcoes_comum').style.display='flex';
        document.getElementById('useropcoes_cliente').style.display='none';
        document.getElementById('useropcoes_empresa').style.display='none';
    } 
}

function cliente(){
    let cliente = document.getElementById('usercliente_conteudo');
    if (cliente) {
        cliente.style.display="flex";
        document.getElementById('usercomum_conteudo').style.display='none';
        document.getElementById('userempresa_conteudo').style.display='none';

        document.getElementById('useropcoes_comum').style.display='none';
        document.getElementById('useropcoes_cliente').style.display='flex';
        document.getElementById('useropcoes_empresa').style.display='none';
    }
}

function os(){
    let os = document.getElementById('ordemservico');
    if(document.getElementById('ordemservico')){
        os.style.display='flex';
        document.getElementById('orcamentospendentes').style.display='none';
        document.getElementById('info_pessoais').style.display='none';
    }
}

function orcpen(){
    let orcpen = document.getElementById('orcamentospendentes');
    if(document.getElementById('orcamentospendentes')){
        orcpen.style.display='flex';
        document.getElementById('ordemservico').style.display='none';
        document.getElementById('info_pessoais').style.display='none';
    }
}

function info_pessoais(){
    let info_pessoais = document.getElementById('info_pessoais');
    if(document.getElementById('info_pessoais')){
        info_pessoais.style.display='flex';
        document.getElementById('orcamentospendentes').style.display='none';
        document.getElementById('ordemservico').style.display='none';
    }
}

function empresa(){
    let empresa = document.getElementById('userempresa_conteudo');
    if (empresa) {
        empresa.style.display="flex";
        document.getElementById('usercomum_conteudo').style.display='none';
        document.getElementById('usercliente_conteudo').style.display='none';

        document.getElementById('useropcoes_comum').style.display='none';
        document.getElementById('useropcoes_cliente').style.display='none';
        document.getElementById('useropcoes_empresa').style.display='flex';
    }
}
