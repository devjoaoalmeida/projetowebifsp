export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="slider">
        <div class="img_slider">
            <img src="/img_1.png" class="slide ativa">
	        <img src="/img_2.png" class="slide">
	        <img src="/img_3.png" class="slide">
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
        <div class="botao_orcamento">
            <div class="maispedidos">
                <img src="" alt="" width="150px" height="200px">
                <div class="info_maispedidos">
                    <p class="info_maispedidos">Manuntenção em micro-ondas</p>
                    <p class="info_maispedidos">Oficina Consertatudo</p>
                    <p class="info_maispedidos">Faça um orçamento para melhor saber sobre o problema</p>
                </div>
            </div>
            <button onclick="document.getElementById('modalmaior_orcamento').style.display='flex'">fazer orçamento</button>
        </div>
        <div class="botao_orcamento">
            <div class="maispedidos">
                <img src="" alt="" width="150px" height="200px">
                <div class="info_maispedidos">
                    <p class="info_maispedidos">Manuntenção em micro-ondas</p>
                    <p class="info_maispedidos">Oficina Consertatudo</p>
                    <p class="info_maispedidos">Faça um orçamento para melhor saber sobre o problema</p>
                </div>
            </div>
            <button onclick="document.getElementById('modalmaior_orcamento').style.display='flex'">fazer orçamento</button>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}