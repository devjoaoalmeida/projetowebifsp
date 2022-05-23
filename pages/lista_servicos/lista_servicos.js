export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="quadro_lista">
        <div class="filtro">
            <fieldset>
                <legend> Tipo </legend>
                <input class="filtros" list="lista_servicos">
                <datalist id="lista_servicos">
                    <option value="Mecanico"></option>
                    <option value="Manutenção"></option>
                </datalist>
            </fieldset>
            <fieldset id="range">
                <legend> Custo </legend>
                <input class="filtros" type="range" list="tickmarks" min="0" max="100">
            </fieldset>
            <fieldset>
                <legend> Prazo </legend>
                <div class="prazo">
                    <input type="checkbox" name="curto" id="curto"> Curto 
                    <input type="checkbox" name="médio" id="médio"> Médio
                    <input type="checkbox" name="longo" id="longo"> Longo
                </div>
            </fieldset>
        </div>
        <fieldset>
            <legend> Lista de Serviços </legend>
            <div class="quadro_servicos">
                <div class="servicos">
                    <div class="servicos_info">
                        <p>Nome do serviço</p>
                        <div class="info">
                            <p>Tipo</p>
                            <p>Custo</p>
                            <p>Prazo</p>
                        </div> 
                    </div>
                    <div class="descricao_info">
                        <p>Descrição</p>
                        <p class="descricao">Esta é a descrição do serviço</p>
                    </div>        
                </div>
            </div>
        </fieldset>
    </div>
    `;

	container.innerHTML = template;

    return container;
}