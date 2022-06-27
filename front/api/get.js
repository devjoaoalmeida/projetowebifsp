function listaServico(n) {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet('https://rickandmortyapi.com/api/character/3').then(console.log).catch(console.error);

    let custototal = 'https://rickandmortyapi.com/api/character/3';
    let custoresultado = custototal.split("",2);
    console.log(custoresultado);

    const nome_servico = `<p class="nome_servico">${servico.nome}</p>`;
    const tipo = `<p>Tipo: ${servico.tipo}</p>`;
    const custo = `<p>Custo Minimo: R$ ${custoresultado} </p>`;
    const prazo = `<p>Prazo Minimo: ${servico.prazo} </p>`;
    const descricao = `<p class="descricao"> ${servico.descricao} </p>`;

    document.getElementById("servicos").insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',tipo);
    document.getElementById("sopcoes_servicos").insertAdjacentHTML('afterbegin',custo);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',prazo);
    document.getElementById("descricao").insertAdjacentHTML('afterbegin',descricao);
}
