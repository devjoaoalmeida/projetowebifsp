async function listaServico() {
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
    
    doGet(`https://rickandmortyapi.com/api/character/3`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/character/3`);
	const character = await result.json();
	console.log(character.name);

    const nome_servico = `<p>${character.name}</p>`;
    const tipo = `<p>Tipo: ${character.name}</p>`;
    const custo = `<p>Custo Minimo: R$ ${character.name} </p>`;
    const prazo = `<p>Prazo Minimo: ${character.name} </p>`;
    const descricao = `<p> ${character.name} </p>`;

    document.getElementById('nome_servico').insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',tipo);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',custo);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',prazo);
    document.getElementById("descricao").insertAdjacentHTML('afterbegin',descricao);
}

async function perfilCliente() {
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
    doGet(`https://rickandmortyapi.com/api/episode/7`).then(console.log).catch(console.error);

	const result = await fetch (`https://rickandmortyapi.com/api/episode/7`);
	const episode = await result.json();
	console.log(episode.name);

    const nome = `<p> Nome: ${episode.name} </p>`;
    const email = `<p> E-mail: ${episode.name} </p`;
    const cpf = `<p> CPF: ${episode.name} </p>`;

    document.getElementById('info_usernome').insertAdjacentHTML('afterbegin',nome);
    document.getElementById('info_useremail').insertAdjacentHTML('afterbegin',email);
    document.getElementById('info_usercpf').insertAdjacentHTML('afterbegin',cpf);
}

async function osCliente() {
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
    doGet(`https://rickandmortyapi.com/api/episode/5`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const num_os = `<p> Número da OS: ${episode.name}</p>`
    const data_os = `<p> Data ordem serviço: ${episode.name}</p`;

    document.getElementById('num_os').insertAdjacentHTML('afterbegin',num_os);
    document.getElementById('data_os').insertAdjacentHTML('afterbegin',data_os);

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
    os_cliente();
}

async function orcamentoCliente() {
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
    doGet('hhttps://rickandmortyapi.com/api/episode/5').then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const nome_servico = `<p> Nome Servico: ${episode.name} </p>`;
    const data_orc = `<p> Orçamento feito: ${episode.name} </p`;
    const status_orc = `<p> Status: ${episode.name} </p>`;

    document.getElementById('nome_servico').insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById('data_orc').insertAdjacentHTML('afterbegin',data_orc);
    document.getElementById('status_orc').insertAdjacentHTML('afterbegin',status_orc);

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
    orc_cliente();
}

async function infoPessoais(){
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
    doGet(`https://rickandmortyapi.com/api/episode/4`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/4`);
	const episode = await result.json();
	console.log(episode.name);

    const rua = `<p> Rua:${episode.name}, nº ${episode.name}, bairro ${episode.name}, cidade ${episode.name}, estado ${episode.name}</p>`;
    const telefone1 = `<p> Telefone 1: ${episode.name}`;
    const telefone2 = `<p> Telefone 2: ${episode.name}`;

    document.getElementById('rua').insertAdjacentHTML('afterbegin',rua);
    document.getElementById('telefone1').insertAdjacentHTML('afterbegin',telefone1);
    document.getElementById('telefone2').insertAdjacentHTML('afterbegin',telefone2);

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
    contato_cliente();
}






function perfilEmpresa() {
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
    doGet('http://localhost:5000/empresa').then(console.log).catch(console.error);

    const cnpj = `<p> CNPJ: ${empresa.cnpj} </p>`;
    const razao_social = `<p> Razão Social: ${empresa.razao_social} </p`;
    const nome_fantasia = `<p> Nome Fantasia: ${empresa.nome_fantasoa} </p>`;

    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',cnpj);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',razao_social);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',nome_fantasia);
}

function osEmpresa() {
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
    doGet('http://localhost:5000/empresa').then(console.log).catch(console.error);

    const cnpj = `<p> CNPJ: ${empresa.cnpj} </p>`;
    const razao_social = `<p> Razão Social: ${empresa.razao_social} </p`;
    const nome_fantasia = `<p> Nome Fantasia: ${empresa.nome_fantasoa} </p>`;

    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',cnpj);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',razao_social);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',nome_fantasia);
}

function orcamentoEmpresa() {
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
    doGet('http://localhost:5000/empresa').then(console.log).catch(console.error);

    const cnpj = `<p> CNPJ: ${empresa.cnpj} </p>`;
    const razao_social = `<p> Razão Social: ${empresa.razao_social} </p`;
    const nome_fantasia = `<p> Nome Fantasia: ${empresa.nome_fantasoa} </p>`;

    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',cnpj);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',razao_social);
    document.getElementById("info_empresa").insertAdjacentHTML('afterbegin',nome_fantasia);
}

