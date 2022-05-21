export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="quadro_servicoscad">
                
        <h1>serviços/produtos cadastrados</h1>

        <div class="campos">
            <p>serviços</p>
            <p>custo</p>
            <p>prazo</p>
            <p>editar</p>
            <p>deletar</p>
        </div>
        
        <div class="quadro">
            <div class="servico">
                <label for="nomeservico">Nome do Serviço: </label>
                <img src="" alt="" width="150px" height="100px">
            </div>

            <div class="custo">
                <input type="text" name="" id="">
            </div>

            <div class="prazo">
                <input type="text" name="" id="">
            </div>

            <div class="editar">
                <button>EDITAR</button>
            </div>

            <div class="deletar">
                <button>DELETAR</button>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}