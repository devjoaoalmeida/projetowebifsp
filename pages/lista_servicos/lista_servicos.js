export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="quadro_lista">
        
        <div class="filtro">
            <div class="tipo">
                <p> Categorias </p>
                <input class="filtros" list="lista_servicos">
                <datalist id="lista_servicos">
                    <option value="Mecanico"></option>
                    <option value="Manutenção"></option>
                </datalist>
            </div>
            <div class="custo">
                <p> Custo </p>
                <input class="filtros" type="range" list="tickmarks" min="0" max="100">
            </div>
            <div class="prazo">
                <p> Prazo </p>
                <div class="opcoes_prazo">
                    <input type="checkbox" name="curto" id="curto"><p>Curto</p> 
                    <input type="checkbox" name="médio" id="médio"><p>Médio</p>
                    <input type="checkbox" name="longo" id="longo"><p>Longo</p>
                </div>
            </div>
        </div>

        <div class="lista_servico">
            <p class="titulo_lista"> Lista de Serviços </p>
            <div class="quadro_servicos">
                <div class="servicos">
                    <p>Nome do serviço</p>
                    <div class="servicos_info">
                        <div>
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div>  
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                    </div>
                    <button onclick="document.getElementById('modalmaior_orcamento').style.display='flex'"> fazer orçamento </button>
                </div>
                <div class="servicos">
                    <p>Nome do serviço</p>
                    <div class="servicos_info">
                        <div>
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                    </div>
                    <button onclick="document.getElementById('modalmaior_orcamento').style.display='flex'"> fazer orçamento </button>
                </div>
                <div class="servicos">
                    <p>Nome do serviço</p>
                    <div class="servicos_info">
                        <div>
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                    </div>
                    <button onclick="document.getElementById('modalmaior_orcamento').style.display='flex'"> fazer orçamento </button>
                </div>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}