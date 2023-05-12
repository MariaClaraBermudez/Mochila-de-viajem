const form = document.getElementById("novoItem")//trazer com id o formulario
const lista = document.getElementById("lista") //receber id de lista
const itens = []

form.addEventListener("submit", (evento) => {  //  os dados escritos são enviados após a ação de clicar no botão “Adicionar”
   evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)
    nome.value = "" 
    quantidade.value = ""
    //limpar bloco de digitaçao automaticamente depois de enviar
})

function criaElemento(nome, quantidade) { 
  //para receber novos produtos na lista

      const novoItem = document.createElement('li') 
      //cria um  li(lista) que guardara um novo item

    novoItem.classList.add("item") 
    //dar uma classe para essa li criada acima

    const numeroItem = document.createElement('strong') 
    //cria um elemento(tag) strong para a quantidade, para ter o mesmo estilo do html (num ero em negrito)

    numeroItem.innerHTML = quantidade  //receber quantidade do produto, o numeroItem ficara no campo de input Quantidade recebendo o valor numerico


    novoItem.appendChild(numeroItem) 
    //infiltra um item (strong) dentro de outro no html ou seja adiciona strong ao novoItem criado



    novoItem.innerHTML += nome
    //fazer com que o nome venha apos a quantidade dele 
    //ex: 7 (quantidade) camisas cinzas (nome)

    lista.appendChild(novoItem) 
    // adicionar tudo oq foi feito acima (novoItem) a pagina web, para quando der o submit (apertar o botao adicionar item) criar um novo item com a quantidade e nome,e css e html ja incluso


    const itemAtual = {
      "nome": nome,
      "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))  //acessar e salvar informaçoes do usuario
    
}

