export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="cadlogin">
        <div class="modalmenor_cadlogin" id="modalmenor_cadlogin">
            <div class="conteudo_modalmenor">
                <p class="fechar" onclick="document.getElementById('modalmenor_cadlogin').style.display='none', document.getElementById('modalmenor_login').style.display='none'">x</p>
                <a class="voltar" href="#login">Voltar</a>
                <form onsubmit="cadastraCliente()">
                    <div class="quadro_cadlogincliente">
                        <div class="info_usuario">
                            <div class="criar_usuario">
                                <b>Informe seu nome</b>
                                <input class="emailsenha" id="nome" name="nome" type="text" placeholder="Insira o seu nome" required>
                                <b>Informe seu e-mail</b>
                                <input class="emailsenha" id="email" name="email" type="email" placeholder="Insira o seu e-mail" required>
                                <b>Crie uma senha</b>
                                <input class="emailsenha" type="password" placeholder="Crie uma senha" required>
                                <input class="emailsenha" id="senha" name="senha" type="password" placeholder="Insira sua senha novamente" required>
                                <b>Informe o seu cpf</b>
                                <input class="emailsenha" id="cpf" name="cpf" type="text" placeholder="Insira o seu CPF" required>
                            </div>
                        </div>
                    </div>
                    <div class="criar_conta">
                        <button type="submit" >CRIAR CONTA</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}