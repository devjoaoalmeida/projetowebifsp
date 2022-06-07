export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="meu_perfil">
        <div class="perfis">
            <div onclick="user()" class="user">
                <p>Meu perfil</p>
            </div>
            <div onclick="cliente()" class="user">
                <p>Sou cliente</p>
            </div>
            <div onclick="empresa()" class="user">
                <p>Minha empresa</p>
            </div>
            <p class="sair">sair</p>
        </div>
        <div class="conteudo_perfis">
            <div id="usercomum_conteudo" class="usercomum_conteudo">
                <p> Nome: João Pedro de Almeida </p>
                <p> E-mail: almeiida.joao@gmail.com </p>
                <button>trocar de senha</button>
            </div>
            <div id="usercliente_conteudo" class="usercliente_conteudo">
                <p> Nome: João Pedro de Almeida </p>
                <p> CPF: 123.456.789-00 </p>
                <button> orçamentos feitos </button>
                <button> ordem de servicos </button>
                <div class="info_endereco">
                    <p>endereço</p>
                    <div class="endereco">
                        <p>rua, numero</p>
                        <p>bairro, cidade, estado</p>
                    </div>
                </div>
                <div class="telefones">
                    <p>telefone</p>
                    <div class="telefone">
                        <p>pessoal</p>
                        <p>residencial</p>
                    </div>
                </div>
            </div>
            <div id="userempresa_conteudo" class="userempresa_conteudo">
                <p> Nome: João Pedro de Almeida </p>
                <p> CPF: 123.456.789-00 </p>
                <p> CNPJ: 12.345.678/0001-00 </p>
                <p> Razao Social: MCDONALDIS CIA </p>
                <p> Nome Fantasia: BURGUERQUINGUE </p>
                <div class="info_endereco">
                    <p>endereço</p>
                    <div class="endereco">
                        <p>rua, numero</p>
                        <p>bairro, cidade, estado</p>
                    </div>
                </div>
                <div class="telefones">
                    <p>telefone</p>
                    <div class="telefone">
                        <p class="pessoal">pessoal</p>
                        <p class="residencial">residencial</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}