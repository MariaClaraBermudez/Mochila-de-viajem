const form = document.getElementById("novoItem")//trazer com id o formulario
const lista = document.getElementById("lista") //receber id de lista

form.addEventListener("submit", (evento) => { //  os dados escritos são enviados após a ação de clicar no botão “Adicionar”
   evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) { //para receber novos produtos na lista
      const novoItem = document.createElement('li') //criei um item em li(lista)
    novoItem.classList.add("item") 

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade  //receber quantidade do produto


    novoItem.appendChild(numeroItem) //receber numero de item junto com nome do item
    novoItem.innerHTML += nome

    lista.appendChild(novoItem) // recebera produto de forma visual

}