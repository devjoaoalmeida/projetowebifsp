export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="meu_perfil">
        <div class="perfis">
            <div id="user_cliente" onclick="cliente()" class="user_cliente">
                <p class="user">Meu perfil</p>
                <div class="useropcoes_cliente" id="useropcoes_cliente">
                    <p class="useropcoes" onclick="os_cliente();osCliente()">Ordem de Serviço</p>
                    <p class="useropcoes" onclick="orc_cliente();orcamentoCliente()">Orçamentos</p>
                    <p class="useropcoes" onclick="contato_cliente()" onclick="infoPessoal()">Informações Pessoais</p>
                    <p class="useropcoes" onclick="trocar_senha()">Trocar senha</p>
                </div>
            </div>

            <div class="user">
                <p class="user" onclick="criar_empresa()">Quero ter a minha empresa</p>
            </div>

            <div id="user_empresa" onclick="empresa()" class="user_empresa">
                <p class="user">Minha empresa</p>
                <div class="useropcoes_empresa" id="useropcoes_empresa">
                    <p class="useropcoes" onclick="cad_servico()">Criar Serviço</p>
                    <p class="useropcoes" onclick="servicos_cads()">Servicos Cadastrados</p>
                    <p class="useropcoes" onclick="orc_empresa()">Orçamentos</p>
                    <p class="useropcoes" onclick="os_empresa()">Ordem de Serviços</p>
                    <p class="useropcoes" onclick="historico_clientes()">Historico</p>
                    <p class="useropcoes" onclick="contato_empresa()">Informações da Empresa</p>
                </div>
            </div>
            <p class="sair">sair</p>
        </div>
        <div class="conteudo_perfis">
            <div class="info_usercomum">
                <p id="info_usernome"></p>
                <p id="info_useremail"></p>
                <p id="info_usercpf"></p>
            </div>
            <div id="usercliente_conteudo" class="usercliente_conteudo">
                <div id="os_cliente" class="os_cliente">
                    <div class="quadros_oscliente">
                        <div class="quadros">
                            <p id="num_os"></p>
                            <p id="data_orc"></p>
                        </div>
                        <div class="quadros">
                            <p id="num_os"></p>
                            <p id="data_orc"></p>
                        </div>
                    </div>
                </div>
                <div id="orcamentos_cliente" class="orcamentos_cliente">
                    <div class="quadro_orcamentoscliente">
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
                </div>
                <div id="contato_cliente" class="contato_cliente">
                    <div class="endereco">
                        <p>ENDEREÇO</p>
                        <div class="info_endereco">
                            <p>Rua das Laranjeiras, nº 564 Centro, Sorocaba - SP</p>
                        </div>
                        <button onclick="document.getElementById('modalmaior_endereco').style.display='flex'">alterar dados</button>
                    </div>
                    <div class="telefone">
                        <p>TELEFONE</p>
                        <div class="telefones">
                            <div class="info_telefone">
                                <p>(15) 99632-8945 </p>
                                <p>(15) 3279-1245 </p>
                            </div>
                        </div>
                        <button onclick="document.getElementById('modalmenor_telefone').style.display='flex'">alterar dados</button>
                    </div>
                </div>
                <div class="trocar_senha" id="trocar_senha">
                    <p>Crie uma nova senha</p>
                    <div class="inserir_senha">
                        <input type="password" placeholder="Insira nova uma senha" required>
					    <input type="password" placeholder="Insira sua senha novamente" required>
                    </div>
                    <button>Criar nova senha</button>
                </div>
                <criar-empresa></criar-empresa>
            </div>
        </div>
    </div>
    <alterar-endereco></alterar-endereco>
    <alterar-telefone></alterar-telefone>

    <div id="alterar_endereco">
		<div class="modalmaior_endereco" id="modalmaior_endereco">
			<div class="conteudo_modalmaior">
				<p class="fechar" onclick="document.getElementById('modalmaior_endereco').style.display='none'">x</p>
				<form>
					<div class="quadro_endereco">
						<div>
                            <b>Rua</b>
						    <input class="emailsenha" type="text" required>
                            <b>Número</b>
						    <input class="numero" type="text" required>
                        </div>
                        <div>
                            <b>Bairro</b>
						    <input class="bairro" type="text" required>
                            <b>Cidade</b>
						    <input class="emailsenha" type="text" required>
                        </div>
                        <div>
                            <b>Estado</b>
						    <input class="estado" type="text" required>
                        </div>
					</div>
				</form>
				<div class="alterar">
                    <button>alterar</button>
				</div>
			</div>
		</div>
    </div>

    <div id="alterar_telefone">
		<div class="modalmenor_telefone" id="modalmenor_telefone">
			<div class="conteudo_modalmenor">
				<p class="fechar" onclick="document.getElementById('modalmenor_telefone').style.display='none'">x</p>
				<form>
					<div class="quadro_telefone">
                        <b>Pessoas</b>
					    <input class="emailsenha" type="text" placeholder="Insira o seu novo telefone" required>
                        <b>Residencial</b>
					    <input class="emailsenha" type="text" placeholder="Insira o seu novo telefone" required>
					</div>
				</form>
				<div class="alterar">
                    <button>alterar</button>
				</div>
			</div>
		</div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}