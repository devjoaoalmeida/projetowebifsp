export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="info_usercomum">
        <p id="info_usernome"></p>
        <p id="info_useremail"></p>
        <p id="info_usercpf"></p>
    </div>
        <div class="meu_perfil">
            <div class="perfis">
                <div id="user_cliente" onclick="cliente()" class="user_cliente">
                    <p class="user">Meu perfil</p>
                    <div class="useropcoes_cliente" id="useropcoes_cliente">
                        <p class="useropcoes" onclick="osCliente()">Ordem de Serviço</p>
                        <p class="useropcoes" onclick="orcamentoCliente()">Orçamentos</p>
                        <p class="useropcoes" onclick="infoPessoais()">Informações Pessoais</p>
                        <p class="useropcoes" onclick="trocar_senha()">Trocar senha</p>
                    </div>
                </div>

                <div class="user">
                    <p class="user" onclick="criar_empresa()">Quero ter a minha empresa</p>
                </div>

                <p class="sair">sair</p>
            </div>

            <div class="conteudo_perfis">
                <div id="usercliente_conteudo" class="usercliente_conteudo">
                    <div id="os_cliente" class="os_cliente">
                        <div class="quadros_oscliente">
                            <div class="quadros">
                                <p id="num_os"></p>
                                <p id="data_os"></p>
                            </div>
                            <div class="quadros">
                                <p id="num_os"></p>
                                <p id="data_os"></p>
                            </div>
                        </div>
                    </div>
                    <div id="orcamentos_cliente" class="orcamentos_cliente">
                        <div class="quadro_orcamentoscliente">
                            <div class="quadros">
                                <p id="nome_servico"></p>
                                <p id="data_orc"></p>
                                <p id="status_orc"></p>
                            </div>
                            <div class="quadros">
                                <p id="nome_servico"></p>
                                <p id="data_orc"></p>
                                <p id="status_orc"></p>
                            </div>
                        </div>
                    </div>
                    <div id="contato_cliente" class="contato_cliente">
                        <div class="endereco">
                            <p>ENDEREÇO</p>
                            <div class="info_endereco">
                                <p id="rua"></p>
                            </div>
                            <button onclick="document.getElementById('modalmaior_endereco').style.display='flex'">alterar dados</button>
                        </div>
                        <div class="telefone">
                            <p>TELEFONE</p>
                            <div class="telefones">
                                <div class="info_telefone">
                                    <p id="telefone1"></p>
                                    <p id="telefone2"></p>
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
                </div>
                <div id="criar_empresa" class="criar_empresa">
                    <form>
                        <div class="quadro_cadloginempresa">
                            <div class="criar_infoempresa">
                                <b>Informe seu CNPJ</b>
                                <input class="emailsenha" type="text" placeholder="Insira o seu cnpj" required>
                                <b>Informe a Razão Social da empresa</b>
                                <input class="emailsenha" type="text" placeholder="Insira o seu razão social" required>
                                <b>Informe o Nome Fantasia da empresa</b>
                                <input class="emailsenha" type="text" placeholder="Insira o seu nome fantasia" required>
                            </div>
                            <div class="criar_endereco">
                                <div class="ruanumero">
                                    <div>
                                        <b>Rua</b>
                                        <input class="rua" type="text" placeholder="Insira sua rua" required>		
                                    </div>
                                    <div>
                                        <b>Número</b>
                                        <input class="num" type="text" required>
                                    </div>
                                </div>
                                <div class="bairrocidadeestado">
                                    <div>
                                        <b>Bairro</b>
                                        <input class="bairro" type="text" placeholder="Insira seu bairro" required>
                                    </div>
                                    <div>
                                        <b>Cidade</b>
                                        <input class="cidade" type="text" placeholder="Insira sua cidade" required>
                                    </div>
                                    <div>
                                        <b>Estado</b>
                                        <input class="estado" type="text" required>
                                    </div>
                                </div>
                                <div class="criar_telefone">
                                    <div>
                                        <b>Tel. Pessoal</b>
                                        <input class="input_telefone" type="text" required>
                                    </div>
                                    <div>
                                        <b>Tel. Residencial</b>
                                        <input class="input_telefone" type="text" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#perfil_empresa">CRIAR CONTA</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


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