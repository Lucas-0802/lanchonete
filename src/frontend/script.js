
const API_URL = 'http://localhost:8080/lanchonete'
const cadastroCliente = document.querySelector('#cadastroCliente')
const cadastroPedido = document.querySelector('#cadastroPedido')


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
                redirecionar()
            } else {
                alert('Ops, ocorreu um erro!!')
            }
        })
    })
}

function redirecionar() {
    window.location.href = "pedidos.html"
}

cadastroPedido.onclick = function() {
   const realizarPedido = document.querySelector('#realizarPedido')
    

    realizarPedido.innerHTML = `
   <br>
   <div class="pedido">
       <label>Selecione uma opção:</label>
       <select id="select">
       <option value=""></option>
        </select>
        <input type="text">
   </div>
   <br>
   <button id="finalizarPedido" class="btnPedidos">Finalizar Pedido</button>
   `
   

   fetch(`${API_URL}/products`).then(response => {
    response.json().then(data => {
        const name = data.map(product => `
        <option>${product.name}</option>
        `)
        const html = name.reduce((acc, curr) =>  {
            acc += curr

            return acc
        },'')
        
        const select = document.querySelector('#select')
        select.innerHTML += html
        console.log(select.value)
    })
})

}

