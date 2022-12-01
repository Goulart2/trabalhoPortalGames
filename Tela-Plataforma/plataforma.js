fetch ('https://api.rawg.io/api/platforms?key=7589628368e14962ad79d0f793517370&language=pt-BR')
      .then(res => res.json ())
        .then(data => {
          let cardzinho = ''
          for(let i = 0; i < 12; i++) {
            let plataformas = data.results[i]
            cardzinho+= ` <div class="card col-lg-3">
      <img class="card-img" src="${plataformas.image_background}" alt="Card image cap">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${plataformas.name}</li>
        <li class="list-group-item">${plataformas.games_count}</li>
      </ul>
      <div class="card-body">
            <a href="https://rawg.io/games/${plataformas.slug}?id=${plataformas.id}" class="card-link">Detalhes</a>
      </div>
    </div>`

  }
  document.getElementById('telaGames').innerHTML = cardzinho
    })