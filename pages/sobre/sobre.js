export default () => {
    const container = document.createElement('div');

    const template = `
    <p>Este projeto foi feito para o primeiro semestre da especialização em desenvolvimento web no Instituto Federal de Itapetininga, sendo desenvolvido por: </p>
		<div class="desenvolvedores">
			<div class="joao">
				<p>João Pedro de Almeida</p>
				<p>link do linkedin</p>
				<p>link do github</p>
			</div>
	
			<div class="walace">
				<p>Walace Victor Galdino de Oliveira Soares</p>
				<p>link do linkedin</p>
				<p>link do github</p>
			</div>
		</div>

		<p>Usando as linguagens para desenvolvimento web:</p>

		<ul class="info_sobre">
			<li> FRONT: HTML, CSS, JavaScript e Vue,js</li>
			<li> BACK: Golang </li>
			<li> BANCO: Relacional (MySQL) e Não-relacional (MongoDB) </li>
			<li> INFRA: Servidor em DOCKER </li>
		</ul>
    `;

	container.innerHTML = template;

    return container;
}