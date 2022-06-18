function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:5000/clientes";
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let cpf = document.getElementById('cpf').value
    console.log(nome)
    console.log(email)
    console.log(cpf)

    body = {
        'name': nome,
        'email': email,
        'cpf': cpf,
    }

    fazPost(url, body)
}