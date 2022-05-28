export default () => {
    const container = document.createElement('div');

    const template = `
	<div class="modal_login" id="modal_login">
		
		<a class="fechar" onclick="document.getElementById('modal_login').style.display='none'">X</a>

		<form class="conteudomodal_login">

			<div class="quadro_login">
				<label for="email"><b> E-mail </b></label>
				<input type="text" placeholder="Insira o seu e-mail" name="email" required>
				<label for="senha"><b> Senha </b></label>
				<input type="password" placeholder="Coloque sua senha" name="senha" required>
				
				<div class="quadro_loginopcoes">
					<button type="submit">Entrar</button>
					<label>
					<input type="checkbox" checked="checked" name="remember"> Lembrar-me
					</label>
				</div>

			</div>

			<div class="opcoes_login">
				<button type="button" onclick="document.getElementById('modal_login').style.display='none'">Cancelar</button>
				<a href="#senha">Esqueceu a senha?</a>
			</div>

		</form>

	</div>
    `;

	container.innerHTML = template;

    return container;
}