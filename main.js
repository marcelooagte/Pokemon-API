
//Utilizando 20 pokemons da api
let minhaVariavel
let array = ''

//Aplicando a função para pegar os nomes e imagens de pokemons por enquanto :
function endereco() {
  for (let x = 0; x <= 20; x++) {
    const url = `https://pokeapi.co/api/v2/pokemon`
    var list = document.getElementById('listPokemon')
    let newItem = document.createElement('img')
    let newItem2 = document.createElement('p')

    fetch(url)
      .then(response => response.json())
      .then(dados => dados.results)
      .then(objeto => {
        return objeto[x].url
      })
      .then(function (retorno) {
        fetch(retorno).then(response2 =>
          response2.json().then(
            dados2 => {
              
              ;(newItem.src = dados2.sprites.other.dream_world.front_default),
                (newItem2.textContent = dados2.forms[0].name),
                list.appendChild(newItem)
              list.appendChild(newItem2)
              
            }
           
          )
        )
      })
  }
}

//chamando a função endereco
endereco()
