const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.getElementsByTagName('main')[0]


fetch(TRAINERS_URL)
.then(response => response.jason())
.then (trainers => {
    trainers.forEach(function(trainer){
        main.innerHTML+=`
        <div class="card" data-id="1"><p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>
        <li>${trainer.pokemons.nickname}<button class="release" data-pokemon-id="${trainer.pokemons.id}">Release</button></li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
        </ul>
        </div>
        `
    })
})

{/* <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
<li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
<li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
<li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
<li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li> */}

