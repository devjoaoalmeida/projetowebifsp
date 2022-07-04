export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="senha">
        <div class="modalmenor_senha" id="modalmenor_senha">
            <div class="conteudo_modalmenor">
                <p class="fechar" onclick="document.getElementById('modalmenor_senha').style.display='none', document.getElementById('modalmenor_login').style.display='none'">x</p>
                <a class="voltar" href="#login">Voltar</a>
                <form>
                    <div class="quadro_senha">
                        <b>Informe seu e-mail</b>
                        <input class="emailsenha" type="text" placeholder="Insira o seu e-mail" required>
                    </div>
                    <p class="descricao_senha">Ao clicar em "enviar e-mail", uma nova senha será enviada ao seu e-mail e ela será sua senha temporaria ate a sua redefinição.</p>
                    <div class="enviar_email">
                        <button type="submit">Enviar e-mail</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}