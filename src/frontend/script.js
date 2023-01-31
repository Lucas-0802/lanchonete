
const API_URL = 'http://localhost:8080/lanchonete'
const cadastroCliente = document.querySelector('#cadastroCliente')

cadastroCliente.onsubmit = function(e) {
    e.preventDefault()
    const name = document.forms['cadastroCliente'].name.value
    const email = document.forms['cadastroCliente'].email.value
    const fone = document.forms['cadastroCliente'].fone.value
    const address = document.forms['cadastroCliente'].address.value

    fetch(`${API_URL}/client`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            fone,
            address
        })
    }).then(response => {
        response.json().then(data => {
            if(data.message === 'sucess') {
                cadastroCliente.reset()
                alert('Cadastro realizado com sucesso!')
            } else {
                alert('Ops, ocorreu um erro!!')
            }
        })
    })
}