fetch ('https://api.rawg.io/api/games?key=7589628368e14962ad79d0f793517370&language=pt-BR')
      .then(res => res.json ())
        .then(data => {
          let cardzinho = ''
          for(let i = 0; i < 12; i++) {
            let games = data.results[i]
            cardzinho+= ` <div class="card col-lg-3">
      <img class="card-img" src="${games.background_image}" alt="Card image cap">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${games.name}</li>
        <li class="list-group-item">${games.released}</li>
        <li class="list-group-item">${games.rating}</li>
      </ul>
      <div class="card-body">
            <a href="https://rawg.io/games/${games.slug}?id=${games.id}" class="card-link">Detalhes</a>
      </div>
    </div>`

  }
  document.getElementById('telaGames').innerHTML = cardzinho
    })


   