async function fazPost(url, body, token){
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    if(token){
        request.setRequestHeader("Authorization", "Bearer  " + token);
    }

    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        localStorage.setItem(tokenBuscar, JSON.stringify(this.responseText));
    }

    return request.responseText
}

async function efetuarLogin() {
    event.preventDefault()
    let url = "localhost:5000/buscarusuario/1"
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    console.log(email)
    console.log(senha)

    user = {
        "email": email,
        "password": senha,
    }

    await fazPost(url, user);
}
