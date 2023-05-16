const form = document.getElementById("novoItem")//trazer com id o formulario
const lista = document.getElementById("lista") //receber id de lista
const itens = JSON.parse(localStorage.getItem("itens")) || [] //receber e salvar coisas do localStorage 


itens.forEach( (elemento) => {    
  criaElemento(elemento)
})
//executar interaçao da funçao e aparecer no console oq conseguiu no locastorage

form.addEventListener("submit", (evento) => {  //  os dados escritos são enviados após a ação de clicar no botão “Adicionar”
   evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    
    const itemAtual = {
      "nome": nome.value,
      "quantidade": quantidade.value
    }

    criaElemento(itemAtual)
    


    itens.push(itemAtual) 
    //inserir a variavel itens no array itemAtual 

    localStorage.setItem("itens", JSON.stringify(itens))  //acessar e salvar informaçoes do usuario
    
    nome.value = "" 
    quantidade.value = ""
    //limpar bloco de digitaçao automaticamente depois de enviar
})


function criaElemento(item) { 
  //para receber novos produtos na lista

      const novoItem = document.createElement('li') 
      //cria um  li(lista) que guardara um novo item

    novoItem.classList.add("item") 
    //dar uma classe para essa li criada acima

    const numeroItem = document.createElement('strong') 
    //cria um elemento(tag) strong para a quantidade, para ter o mesmo estilo do html (num ero em negrito)

    numeroItem.innerHTML = item.quantidade  
    //receber quantidade do produto, o numeroItem ficara no campo de input Quantidade recebendo o valor numerico


    novoItem.appendChild(numeroItem) 
    //infiltra um item (strong) dentro de outro no html ou seja adiciona strong ao novoItem criado



    novoItem.innerHTML += item.nome
    //fazer com que o nome venha apos a quantidade dele 
    //ex: 7 (quantidade) camisas cinzas (nome)

    lista.appendChild(novoItem) 
    // adicionar tudo oq foi feito acima (novoItem) a pagina web, para quando der o submit (apertar o botao adicionar item) criar um novo item com a quantidade e nome,e css e html ja incluso


    
    
}

