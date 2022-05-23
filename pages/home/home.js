export default () => {
    const container = document.createElement('div');

    const template = `
        <div class="slider">
            <img src="" alt="" width="1000px" height="400px" class="anuncie_aqui">
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