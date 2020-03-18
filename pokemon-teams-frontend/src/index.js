const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.getElementsByTagName('main')[0]
console.log(main)


fetch(TRAINERS_URL)
.then(response => response.json())
.then (trainers => {
    trainers.forEach(function(trainer){
        main.innerHTML+=`
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>
        <li>${trainer.pokemons.nickname} <button class="release" data-pokemon-id=${trainer.pokemons.id}>Release</button></li>
        </ul>
        </div>
        `
        
    })
})

main.addEventListener("click", function(event){
    if(event.target.innerText === "Add Pokemon"){
        
    }
})


{/* <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
<li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
<li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
<li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
<li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li> */}

