const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

fetch(BASE_URL)
.then(response => response.jason())
.then (pokemons => {
    pokemons.forEach(function(pokemon){
        
    })
})

