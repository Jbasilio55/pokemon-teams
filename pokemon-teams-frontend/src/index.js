const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.getElementsByTagName('main')[0]
const release = document.getElementsByClassName('release')[0]
console.log(main)
console.log(release)


fetch(TRAINERS_URL)
.then(response => response.json())
.then (trainers => {
    trainers.forEach(function(trainer){
        console.log(trainer.pokemons)
        main.innerHTML+=`
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
        <button data-trainer-id="${trainer.id}">Add Pokemon</button>
        <ul>
        <li>${trainer.pokemons.nickname} <button class="release" data-pokemon-id=${trainer.pokemons.id}>Release</button></li>
        </ul>
        </div>
        `,
        trainer.pokemons.forEach(function(pokemon){
            console.log(trainer.pokemons.id)
            console.log(trainer.pokemons.nickname)
        })
    })
})

main.addEventListener("click", function(event){
    console.log(event.target)
    if(event.target.innerText === "Add Pokemon"){
        fetch(POKEMONS_URL, {
            method: "post",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body:JSON.stringify(pokemon)
        })
        .then(response => response.json())
        .then(pokemon => {

        })
    }
})




{/* <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
<li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
<li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
<li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
<li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li> */}

