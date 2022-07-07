export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="slider">

        <div class="img_slider">
            <img src="img/img_1.png" class="slide ativa">
	        <img src="img/img_2.png" class="slide">
	        <img src="img/img_3.png" class="slide">
        </div>

	    <div class="passar_slider">
	    	<button class="anterior" onclick="anterior()"><</button>
	  		<button class="proximo" onclick="proximo()">></button>
	    </div>

        <div class="botao_slider">
            <button class="botao_slider" onclick="slideAtual(0)"></button>
            <button class="botao_slider" onclick="slideAtual(1)"></button>
            <button class="botao_slider" onclick="slideAtual(2)"></button>
        </div>
	</div>

    <div class="boas_vindas">
        <p class="boas_vindas">Seja bem-vindo ao ServTech, aqui você poderá encontrar o solução certa para o seu problema esta aqui!</p>
    </div>
    `;

	container.innerHTML = template;

    return container;
}