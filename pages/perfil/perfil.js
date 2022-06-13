export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="meu_perfil">
        <div class="perfis">
            <div onclick="user()" class="user">
                <p class="user">Meu perfil</p>
                <div class="useropcoes_comum" id="useropcoes_comum">
                    <p class="useropcoes" onclick="document.getElementById('trocar_senha').style.display='flex'"">Trocar senha</p>
                </div>
            </div>
            <div onclick="cliente()" class="user">
                <p class="user">Sou cliente</p>
                <div class="useropcoes_cliente" id="useropcoes_cliente">
                    <p class="useropcoes">Ordem de Serviço</p>
                    <p class="useropcoes">Orçamento Pendentes</p>
                    <p class="useropcoes">Informações Pessoais</p>
                </div>
            </div>
            <div onclick="empresa()" class="user">
                <p class="user">Minha empresa</p>
                <div class="useropcoes_empresa" id="useropcoes_empresa">
                    <p class="useropcoes">Criar Serviço</p>
                    <p class="useropcoes">Orçamentos em Aberto</p>
                    <p class="useropcoes">Orçamentos Fechados</p>
                    <p class="useropcoes">Ordem de Serviço em Aberto</p>
                    <p class="useropcoes">Ordem de Serviço Fechados</p>
                    <p class="useropcoes">Historico</p>
                    <p class="useropcoes">Informações da Empresa</p>
                </div>
            </div>
            <p class="sair">sair</p>
        </div>

        <div class="conteudo_perfis">
            
            <div id="usercomum_conteudo" class="usercomum_conteudo">
                <div class="info_usercomum">
                    <p> Nome: João Pedro de Almeida </p>
                    <p> E-mail: almeiida.joao@gmail.com </p>
                </div>
                <div class="trocar_senha" id="trocar_senha">
                    <b>Crie uma nova senha</b>
					<input type="password" placeholder="Crie nova uma senha" required>
					<input type="password" placeholder="Insira sua senha novamente" required>
                    <button>Criar nova senha</button>
                </div>
            </div>

            <div id="usercliente_conteudo" class="usercliente_conteudo">
                <div class="ordemservico">
                    <div class="quadro_orderservico">
                        <p>Número da OS: 01</p>
                        <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                        <p>Consertatudo: Conserto de Micro-ondas</p>
                    </div>
                </div>
                <div class="orcamentospendentes">
                    <div class="quadro_orcamentospendentes">
                        <p>Consertatudo: Conserto de Micro-ondas</p>
                        <p>Orçamento feito: 07/06/2022</p>
                        <p>Respondido</p>
                    </div>
                </div>
                <div class="info_pessoais">
                    <p class="cpf">CPF: 123.456.789-00</p>
                    <div class="endereco">
                        <p>endereço</p>
                        <div class="info_endereco">
                            <p>rua, numero</p>
                            <p>bairro, cidade, estado</p>
                        </div>
                        <button>alterar dados</button>
                    </div>
                    <div class="telefone">
                        <p>telefone</p>
                        <div class="telefones">
                            <div class="info_telefone">
                                <p>pessoal</p>
                                <p>residencial</p>
                            </div>
                        </div>
                        <button>alterar dados</button>
                    </div>
                </div>
            </div>

            <div id="userempresa_conteudo" class="userempresa_conteudo">                
                <div class="cadservico">
                </div>
                <div class="orcamentos_aberto">
                </div>
                <div class="orcamentos_fechado">
                </div>
                <div class="ordemservico_aberto">
                </div>
                <div class="ordemservico_fechados">
                </div>
                <div class="historico_clientes">
                </div>
                <div class="todasinfo_empresa">
                    <div class="info_empresa">
                        <p> CNPJ: 12.345.678/0001-00 </p>
                        <p> Razao Social: MCDONALDIS CIA </p>
                        <p> Nome Fantasia: BURGUERQUINGUE </p>
                    </div>
                    <div class="endereco">
                        <p>endereço</p>
                        <div class="info_endereco">
                            <p>rua, numero</p>
                            <p>bairro, cidade, estado</p>
                        </div>
                        <button>alterar dados</button>
                    </div>
                    <div class="telefone">
                        <p>telefone</p>
                        <div class="telefones">
                            <div class="info_telefone">
                                <p>pessoal</p>
                                <p>residencial</p>
                            </div>
                        </div>
                        <button>alterar dados</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}