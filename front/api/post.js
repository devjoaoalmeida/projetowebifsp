function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastraUsuario() {
    preventDefault()
    let url = "http://127.0.0.1:5000/clientes";

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    let telefone1 = document.getElementById('telefone1').value;
    let telefone2 = document.getElementById('telefone2').value;

    let cpf = document.getElementById('cpf').value;

    console.log(nome)
    console.log(email)
    console.log(senha)

    console.log(rua)
    console.log(numero)
    console.log(bairro)
    console.log(cidade)
    console.log(estado)

    console.log(telefone1)
    console.log(telefone2)

    console.log(cpf)

    body = {
        'name': nome,
        'email': email,
        'senha': senha,

        'rua': rua,
        'numero': numero,
        'bairro': bairro,
        'cidade': cidade,
        'estado': estado,
        
        'telefone1': telefone1,
        'telefone2': telefone2,

        'cpf': cpf,
    }

    fazPost(url, body)
}