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
                    <p class="nome_servico" id="nome_servico"></p>
                    <div class="info_servicos">
                        <div class="opcoes_servicos" id="opcoes_servicos">
                        </div> 
                        <div>
                            <p class="descricao" id="descricao"></p>
                        </div>  
                    </div>
                    <button onclick="document.getElementById('modalmenor_orcamento').style.display='flex'"> pedir orçamento </button>
                </div>
            </div>
        </div>

        <div id="orcamento">
            <div class="modalmenor_orcamento" id="modalmenor_orcamento">
                <div class="conteudo_modalmenor">
                    <div class="quadro_orcamento">
                        <p class="nomeservico_orcamento">Oficina Consertatudo: </p>	
                        <p class="nomeservico_orcamento">Conserto de Micro-ondas</p>
                        <div class="info_orcamento">
                            <p>Categoria: Eletronica</p>
                            <p>Custo pré definido: R$100,00</p>
                            <p>Prazo: 5 dias</p>
                        </div>
                    </div>
                    <form>
                        <input type="text" class="mensagem" placeholder="Explique o que aconteceu com o micro-ondas" required>
                        <div class="botoes_orcamento">
                            <button type="submit" onclick="orcamento_feito()">confirmar</button>
                            <button type="button" onclick="document.getElementById('modalmenor_orcamento').style.display='none'">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    <!--</div>-->
    `;

	container.innerHTML = template;

    return container;
}