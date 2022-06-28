export default () => {
    const container = document.createElement('div');

    const template = `
    <!--<div class="quadro_lista">-->
        
        <!--<div class="filtro">
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
        </div>-->

        <div class="lista_servico">
            <div class="quadro_servicos">
            <p class="titulo_listaservico">Lista de Serviços</p>
                <div class="servicos">
                    <p class="nome_servico">Nome do serviço</p>
                    <div class="info_servicos">
                        <div class="opcoes_servicos">
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                        <button onclick="document.getElementById('modalmenor_orcamento').style.display='flex'"> pedir orçamento </button>
                    </div>
                </div>
                <div class="servicos" id="servicos">
                    <p class="nome_servico">Nome do serviço</p>
                    <div class="info_servicos" id="info_servicos">
                        <div class="opcoes_servicos" id="opcoes_servicos">
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div id="descricao">
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                        <button onclick="document.getElementById('modalmenor_orcamento').style.display='flex'"> pedir orçamento </button>
                    </div>
                </div>
                <div class="servicos">
                    <p class="nome_servico">Nome do serviço</p>
                    <div class="info_servicos">
                        <div class="opcoes_servicos">
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                        <button onclick="document.getElementById('modalmenor_orcamento').style.display='flex'"> pedir orçamento </button>
                    </div>
                </div>
                <div class="servicos">
                    <p class="nome_servico">Nome do serviço</p>
                    <div class="info_servicos">
                        <div class="opcoes_servicos">
                            <p>Tipo: Mecanica</p>
                            <p>Custo Minimo: R$ 100,00</p>
                            <p>Prazo Minimo: 2 dias</p>
                        </div> 
                        <div>
                            <p class="descricao">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusantium debitis a quos temporibus ut pariatur quas eos cumque est harum</p>
                        </div>  
                        <button onclick="document.getElementById('modalmenor_orcamento').style.display='flex'"> pedir orçamento </button>
                    </div>
                </div>
            </div>
        </div>
    <!--</div>-->
    `;

	container.innerHTML = template;

    return container;
}