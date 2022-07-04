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
                            <input class="emailsenha" type="text" placeholder="Insira o seu e-mail" required>
                            <b>Senha</b>
                            <input class="emailsenha" type="password" placeholder="Coloque sua senha" required>	
                            <div class="esqueceu_senha">
                                <a class="esqueceu_senha" href="#senha">Esqueceu a senha?</a>
                            </div>
                            <div>
                                <button class="entrar" type="submit">Entrar</button>
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