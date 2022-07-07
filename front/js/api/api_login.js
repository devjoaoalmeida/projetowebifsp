async function fazPost(url, body, token)  {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json",)
    if(token){
        request.setRequestHeader("Authorization", "Bearer  " + token);
    }

    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        const token = this.responseText;
        localStorage.setItem('token', token);
        console.log(token);
    }

    return request.responseText
}

async function efetuarLogin() {
    event.preventDefault()
    let url = 'http://localhost:5000/login'
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    console.log(email)
    console.log(senha)

    user = {
        "email": email,
        "senha": senha
    }

    await fazPost(url, user);
}
