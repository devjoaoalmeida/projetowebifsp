export default () => {
    const container = document.createElement('div');

    const template = `
        <div id="login">
            <div class="modalmenor_login" id="modalmenor_login">
                <div class="conteudo_modalmenor">
                    <p class="fechar" onclick="document.getElementById('modalmenor_login').style.display='none'">x</p>
                    <form>
                        <div class="quadro_login">
                            <b>E-mail</b>
                            <input class="emailsenha" id="email" type="email" placeholder="Insira o seu e-mail" required>
                            <b>Senha</b>
                            <input class="emailsenha" id="senha" type="password" placeholder="Coloque sua senha" required>	
                            <div class="esqueceu_senha">
                                <a class="esqueceu_senha" href="#senha">Esqueceu a senha?</a>
                            </div>
                            <div>
                                <button class="entrar" id="entrar_login" onclick="efetuarLogin()">Entrar</button>
                            </div>
                        </div>
                    </form>
                    <div class="cadastrese">
                        <a href="#cad_login">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    `;

	container.innerHTML = template;

    return container;
}