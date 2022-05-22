export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="principal">
        <img src="" alt="" width="1000px" height="400px" class="anuncie_aqui">
        
        <div class="quadro_maispedidos">
            <div class="maispedidos"> <!-- QUADRO UM DOS SERVIÇOS -->
                <img src="" alt="" width="150px" height="200px">
                <ul class="informacoes">
                    <li class="informacoes">
                        <p class="informacoes">nome do serviço: </p>
                    </li>
                    <li class="informacoes">
                        <p class="informacoes">empresa: </p>
                    </li>
                    <li class="informacoes_desc">
                        <p class="informacoes">descrição: </p>
                    </li>
                    <li class="informacoes">
                        <button class="botao_orcamento">fazer orçamento</button>
                    </li>
                </ul>
            </div>
            <div class="maispedidos"> <!-- QUADRO UM DOS SERVIÇOS -->
                <img src="" alt="" width="150px" height="200px">
                <ul class="informacoes">
                    <li class="informacoes">
                        <p class="informacoes">nome do serviço: </p>
                    </li>
                    <li class="informacoes">
                        <p class="informacoes">empresa: </p>
                    </li>
                    <li class="informacoes_desc">
                        <p class="informacoes">descrição: </p>
                    </li>
                    <li class="informacoes">
                        <button class="botao_orcamento">fazer orçamento</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}