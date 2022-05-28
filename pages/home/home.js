export default () => {
    const container = document.createElement('div');

    const template = `
    <link rel="stylesheet" href="/front/css/slider_style.css">
	<script src="/front/js/slider.js" type="module"></script>
    <div class="slider">
        <div class="img_slider">
            <img src="/img_1.png" id="img0" class="slide ativa">
	        <img src="/img_2.png" id="img1" class="slide">
	        <img src="/img_3.png" id="img2" class="slide">
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
    <div class="quadro_maispedidos">
        <div class="maispedidos">
            <img src="" alt="" width="150px" height="200px">
            <div class="info_maispedidos">
                <p>nome do serviço: </p>
                <p>empresa: </p>
                <p>descrição: </p>
                <button class="botao_orcamento">fazer orçamento</button>
            </div>
        </div>
        <div class="maispedidos">
            <img src="" alt="" width="150px" height="200px">
            <div class="info_maispedidos">
                <p>nome do serviço: </p>
                <p>empresa: </p>
                <p>descrição: </p>
                <button class="botao_orcamento">fazer orçamento</button>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}