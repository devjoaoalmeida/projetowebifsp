function orcamento_feito(){
    var mensagem = document.getElementsByClassName('mensagem')
    if (mensagem == ""){
        alert("Você precisa especificar o problema que esta ocorrendo")
    } else{
        alert("Seu orçamento foi feito, o prazo de resposta é 3 dias")
    }
}