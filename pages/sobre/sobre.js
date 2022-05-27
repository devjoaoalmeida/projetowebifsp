export default () => {
    const container = document.createElement('div');

    const template = `
	<div class="quadro_sobre">	
		<h4 class="desenvolvedores">Este projeto foi feito para o primeiro semestre da especialização em desenvolvimento web no Instituto Federal de Itapetininga, sendo desenvolvido por: </h4>	
		<div class="desenvolvedores">			
			<div class="joao">
				<p class="joao">João Pedro de Almeida</p>
				<p class="joao"><a href="https://www.linkedin.com/in/joaopedro-almeida/">Linked-in</a></p>
				<p class="joao"><a href="https://github.com/Jaozin04">GitHub</a></p>
			</div>
		
			<div class="walace">
				<p class="walace">Walace Victor Galdino de Oliveira Soares</p>
				<p class="walace"><a href="https://www.linkedin.com/in/walace-soares-desenvolvedor">Linked-in</a></p>
				<p class="walace"><a href="https://github.com/walacesoares">GitHub</a></p>
			</div>
		</div>

		<div class="linguagens">
			<p class="linguagens">Usando as linguagens para desenvolvimento web:</p>

			<ul>
				<li> FRONT: HTML, CSS, JavaScript e Vue,js</li>
				<li> BACK: Golang </li>
				<li> BANCO: Relacional (MySQL) e Não-relacional (MongoDB) </li>
				<li> INFRA: Servidor em DOCKER </li>
			</ul>
		</div>
	</div>
    `;

	container.innerHTML = template;

    return container;
}