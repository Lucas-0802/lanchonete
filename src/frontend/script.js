
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
       <select name="select">
       <option value=""></option>
       <option value="pizza">Pizza</option>
       <option value="hamburguer">Hamburguer</option>
       <option value="hotdog">HotDog</option>
        </select>
        <input type="text">
   </div>
   <br>
   <div class="pedido">
       <label>Selecione uma opção:</label>
       <select name="select">
       <option value=""></option>
       <option value="Coca-Cola">Coca-Cola</option>
       <option value="Guaraná">Guaraná</option>
       <option value="Pepsi">Pepsi</option>
        </select>
        <input type="text">
   </div>
   <br>
   <button id="finalizarPedido" class="btnPedidos">Finalizar Pedido</button>
   `
}

