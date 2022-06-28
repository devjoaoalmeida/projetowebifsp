function cliente(){
    let cliente = document.getElementById('usercliente_conteudo');
    if (cliente) {
        cliente.style.display="flex";
        document.getElementById('userempresa_conteudo').style.display='none';

        document.getElementById('useropcoes_cliente').style.display='flex';
        document.getElementById('useropcoes_empresa').style.display='none';
    }
}

function os_cliente(){
    let os_cliente = document.getElementById('os_cliente');
    if(document.getElementById('os_cliente')){
        os_cliente.style.display='flex';
        document.getElementById('orcamentos_cliente').style.display='none';
        document.getElementById('contato_cliente').style.display='none';
        document.getElementById('trocar_senha').style.display='none';
        document.getElementById('criar_empresa').style.display='none';
    }
}

function orc_cliente(){
    let orc_cliente = document.getElementById('orcamentos_cliente');
    if(document.getElementById('orcamentos_cliente')){
        orc_cliente.style.display='flex';
        document.getElementById('os_cliente').style.display='none';
        document.getElementById('contato_cliente').style.display='none';
        document.getElementById('trocar_senha').style.display='none';
        document.getElementById('criar_empresa').style.display='none';
    }
}

function contato_cliente(){
    let contato_cliente = document.getElementById('contato_cliente');
    if(document.getElementById('contato_cliente')){
        contato_cliente.style.display='flex';
        document.getElementById('orcamentos_cliente').style.display='none';
        document.getElementById('os_cliente').style.display='none';
        document.getElementById('trocar_senha').style.display='none';
        document.getElementById('criar_empresa').style.display='none';
    }
}

function trocar_senha(){
    let trocar_senha = document.getElementById('trocar_senha');
    if(document.getElementById('trocar_senha')){
        trocar_senha.style.display='flex';
        document.getElementById('orcamentos_cliente').style.display='none';
        document.getElementById('os_cliente').style.display='none';
        document.getElementById('contato_cliente').style.display='none';
        document.getElementById('criar_empresa').style.display='none';
    }
}

function criar_empresa(){
    let criar_empresa = document.getElementById('criar_empresa');
    if(document.getElementById('criar_empresa')){
        criar_empresa.style.display='flex';
        document.getElementById('orcamentos_cliente').style.display='none';
        document.getElementById('os_cliente').style.display='none';
        document.getElementById('contato_cliente').style.display='none';
        document.getElementById('trocar_senha').style.display='none';
    }
}


function empresa(){
    let empresa = document.getElementById('userempresa_conteudo');
    if (empresa) {
        empresa.style.display="flex";
        document.getElementById('usercliente_conteudo').style.display='none';

        document.getElementById('useropcoes_cliente').style.display='none';
        document.getElementById('useropcoes_empresa').style.display='flex';
    }
}

function cad_servico(){
    let cad_servico = document.getElementById('cad_servico');
    if(document.getElementById('cad_servico')){
        cad_servico.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
        document.getElementById('contato_empresa').style.display='none';
    }
}

function servicos_cads(){
    let servicos_cads = document.getElementById('servicos_cads');
    if(document.getElementById('servicos_cads')){
        servicos_cads.style.display='flex';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
        document.getElementById('contato_empresa').style.display='none';
    }
}

function orc_empresa(){
    let orc_empresa = document.getElementById('orcamentos_empresa');
    if(document.getElementById('orcamentos_empresa')){
        orc_empresa.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
        document.getElementById('contato_empresa').style.display='none';
    }
}

function os_empresa(){
    let os_empresa = document.getElementById('os_empresa');
    if(document.getElementById('os_empresa')){
        os_empresa.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
        document.getElementById('contato_empresa').style.display='none';
    }
}

function historico_clientes(){
    let historico_clientes = document.getElementById('historico_clientes');
    if(document.getElementById('historico_clientes')){
        historico_clientes.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('contato_empresa').style.display='none';
    }
}

function contato_empresa(){
    let contato_empresa = document.getElementById('contato_empresa');
    if(document.getElementById('contato_empresa')){
        contato_empresa.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
    }
}
