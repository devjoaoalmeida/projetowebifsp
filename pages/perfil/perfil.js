export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="meu_perfil">
        <div class="perfis">
            <div onclick="user()" class="user">
                <p class="user">Meu perfil</p>
                <div class="useropcoes_comum" id="useropcoes_comum">
                    <p class="useropcoes" onclick="document.getElementById('trocar_senha').style.display='flex'">Trocar senha</p>
                </div>
            </div>
            <div onclick="cliente()" class="user">
                <p class="user">Sou cliente</p>
                <div class="useropcoes_cliente" id="useropcoes_cliente">
                    <p class="useropcoes" onclick="os()">Ordem de Serviço</p>
                    <p class="useropcoes" onclick="orcpen()">Orçamento Pendentes</p>
                    <p class="useropcoes" onclick="contato_pessoal()">Informações Pessoais</p>
                </div>
            </div>
            <div onclick="empresa()" class="user">
                <p class="user">Minha empresa</p>
                <div class="useropcoes_empresa" id="useropcoes_empresa">
                    <p class="useropcoes">Criar Serviço</p>
                    <p class="useropcoes">Servicos Cadastrados</p>
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

            <div class="info_usercomum">
                <p> Nome: João Pedro de Almeida </p>
                <p> E-mail: almeiida.joao@gmail.com </p>
            </div>

            <div id="usercomum_conteudo" class="usercomum_conteudo">
                <div class="trocar_senha" id="trocar_senha">
                    <p>Crie uma nova senha</p>
					<input type="password" placeholder="Insira nova uma senha" required>
					<input type="password" placeholder="Insira sua senha novamente" required>
                    <button>Criar nova senha</button>
                </div>
            </div>

            <div id="usercliente_conteudo" class="usercliente_conteudo">
                <p class="cpf">CPF: 123.456.789-00</p>
                <div id="ordemservico" class="ordemservico">
                    <div class="quadros_ordemservico">
                        <div class="quadros">
                            <p>Número da OS: 01</p>
                            <p>Orçamento Feito 07/06/2022</p>
                            <p>Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                        <div class="quadros">
                            <p>Número da OS: 02</p>
                            <p>Orçamento Feito 07/06/2022</p>
                            <p>Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                    </div>
                    <p class="vermais">Ver mais...</p>
                </div>
                <div id="orcamentospendentes" class="orcamentospendentes">
                    <div class="quadro_orcamentospendentes">
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Pendente</p>
                        </div>
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                    </div>
                    <p class="vermais">Ver mais...</p>
                </div>
                <div id="contato_pessoal" class="contato_pessoal">
                    <div class="endereco">
                        <p>ENDEREÇO</p>
                        <div class="info_endereco">
                            <p>Rua das Laranjeiras, nº 564 Centro, Sorocaba - SP</p>
                        </div>
                        <button>alterar dados</button>
                    </div>
                    <div class="telefone">
                        <p>TELEFONE</p>
                        <div class="telefones">
                            <div class="info_telefone">
                                <p>(15) 99632-8945 </p>
                                <p>(15) 3279-1245 </p>
                            </div>
                        </div>
                        <button>alterar dados</button>
                    </div>
                </div>
            </div>

            <div id="userempresa_conteudo" class="userempresa_conteudo">                
                <div class="info_empresa">
                    <p> CNPJ: 12.345.678/0001-00 </p>
                    <p> Razao Social: MCDONALDIS CIA </p>
                    <p> Nome Fantasia: BURGUERQUINGUE </p>
                </div>
                <div id="cad_servico" class="cad_servico">
                    <form>
                        <div class="quadro_cadservico">
                            <p>Informe o nome do serviço</p>
                            <input type="text">
                            <p>Informe a categoria do serviço</p>
                            <input type="text">
                            <p>Informe o custo minimo do serviço</p>
                            <input type="text">
                            <p>Informe o prazo minimo do serviço</p>
                            <input type="text">	
                            <p>Descrição do serviço</p>
                            <input type="text" class="mensagem" placeholder="Descreva como o serviço é feito" required>
                            <div class="botoes_orcamento">
                                <button type="submit">cadastrar serviço</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="servicos_cads" class="servicos_cads">
                    <div class="quadro_servicoscads">
                        <div class="quadros_servicoscads">
                            <div>
                                <p>Nome do serviço</p>
                                <p>Tipo: </p>
                                <p>Custo: </p>
                                <p>Prazo: </p>
                            </div>
                            <div>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="orcamentos_aberto" class="orcamentos_aberto">
                    <div class="quadro_orcamentospendentes">
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                    </div>
                </div>
                <div id="orcamentos_fechado" class="orcamentos_fechado">
                    <div class="quadro_orcamentospendentes">
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                    </div>
                </div>
                <div id="os_aberto" class="os_aberto">
                    <div class="quadros_ordemservico">
                        <div class="quadros">
                            <p>Número da OS: 01</p>
                            <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                        <div class="quadros">
                            <p>Número da OS: 02</p>
                            <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                    </div>
                </div>
                <div id="os_fechado" class="os_fechados">
                    <div class="quadros_ordemservico">
                        <div class="quadros">
                            <p>Número da OS: 01</p>
                            <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                        <div class="quadros">
                            <p>Número da OS: 02</p>
                            <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                    </div>
                </div>
                <div id="historico_clientes" class="historico_clientes">
                    <button>Buscar historico de clientes</button>
                    <p>Obs: O historico de clientes será enviado ao e-mail informado</p>
                </div>
                <div class="endereco">
                    <p>ENDEREÇO</p>
                    <div class="info_endereco">
                        <p>Rua das Laranjeiras, nº 564</p>
                        <p>Centro, Sorocaba - SP</p>
                    </div>
                    <button>alterar dados</button>
                </div>
                <div class="telefone">
                    <p>TELEFONE</p>
                    <div class="telefones">
                        <div class="info_telefone">
                            <p>(15) 99632-8945 </p>
                            <p>(15) 3279-1245 </p>
                        </div>
                    </div>
                    <button>alterar dados</button>
                </div>
            </div>

        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}