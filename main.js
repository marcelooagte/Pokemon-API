//Utilizando 20 pokemons da api

//Aplicando a função para pegar os nomes e imagens de pokemons por enquanto :
function for20(x) {
  if (x < 3) {
    ;(listtd = document.getElementById('1tr')),
      (listtd2 = document.getElementById('1td'))
  }
  if (x >= 3) {
    if (x < 6) {
      listtd = document.getElementById('2tr')
      listtd2 = document.getElementById('2td')
    } else if (x < 9) {
      listtd = document.getElementById('3tr')
      listtd2 = document.getElementById('2td')
    } else if (x < 12) {
      listtd = document.getElementById('4tr')
      listtd2 = document.getElementById('4td')
    } else if (x < 15) {
      listtd = document.getElementById('5tr')
      listtd2 = document.getElementById('5td')
    } else if (x < 18) {
      listtd = document.getElementById('6tr')
      listtd2 = document.getElementById('6td')
    } else if (x < 21) {
      listtd = document.getElementById('7tr')
      listtd2 = document.getElementById('7td')
    }
  }
  return listtd
}

function endereco() {
  const url = `https://pokeapi.co/api/v2/pokemon`
  let newbreak = document.createElement('br')
  for (let x = 0; x <= 20; x++) {
    let newItem = document.createElement('img')
    let newItem2 = document.createElement('td')

    fetch(url)
      .then(response => response.json())
      .then(dados => dados.results)
      .then(objeto => {
        return objeto[x].url
      })
      .then(function (retorno) {
        fetch(retorno).then(response2 =>
          response2.json().then(dados2 => {
            ;(newItem.src = `${dados2.sprites.other.dream_world.front_default}`),
              (newItem2.textContent = `${dados2.forms[0].name}`),
              for20(x)
            listtd.appendChild(newItem2).appendChild(newItem)
            listtd2.appendChild(newItem)
            //list.appendChild(newItem3)
          })
        )
      })
  }
}

//chamando a função endereco
endereco()
