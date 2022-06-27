fetch("http://127.0.0.1:5000/clientes", {
    method: "POST",
     
    body: JSON.stringify({
        nome: 'nome',
        email: 'email',
        senha: 'senha',
        cpf: 'cpf'
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));