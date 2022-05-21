export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="quadro_cadastroservico">
			
        <h1>detalhe de serviços/produtos</h1>

        <div class="quadro_servico">
            <div class="quadro_servico_direita">
                <div>
                    <label for="nome"><b> Nome do serviço: </b></label>
                    <input type="text" placeholder="Nome do serviço." name="nome_servico" required>
                </div>
                <div>
                    <label for="categoria"><b> Categoria </b></label>
                    <input type="radio" value="produto" name="categoria" required><label for="produto">Produto</label>
                    <input type="radio" value="servico" name="categoria" required><label for="servico">Serviço</label>
                </div>
                <div>
                    <label for="custo"><b> Custo: </b></label>
                    <input type="text" placeholder="Custo minimo" name="custo" required>
                </div>
                <div>
                    <label for="prazo"><b> Prazo: </b></label>
                    <input type="text" placeholder="Prazo minimo" name="prazo" required>
                </div>
                <div>
                    <label for="descrição"><b> Descrição: </b></label>
                    <input type="text" placeholder="Explique como é o serviço que será prestado." name="descrição" required>
                </div>
            </div>
            
            <div class="quadro_servico_esquerda">
                <div class="quadro_uploadimg">
                    <label>Imagem do serviço</label>
                    <img src="" width="100px" height="100px">
                </div>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}