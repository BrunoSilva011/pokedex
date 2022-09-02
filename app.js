'use strict'
const url = 'https://pokeapi.co/api/v2/pokemon/'
let infosPokes = document.getElementById("pokemon")
let pokeName,
    pokemon,
    card;

function search() {
    let inp = document.getElementById("inp").value.toLowerCase();
    console.log(inp)
    fetch(url + inp).then(response => 
    response.json()).then(pokemon => {
       infosPokes.innerHTML = card = `
       <div id="pokemon-picture">
         <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
       </div>
       <div class="pokemon-info">
           <h1 class="name">Name: ${pokemon.name}</h1>
           <h2 class="number">Nº: ${pokemon.id}</h2>
           <h3 class="type">Type: ${pokemon.types.map(item => ' ' + item.type.name).toString()}</h3>
           <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
           <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
           <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
       </div>`;
    })
    .catch(err => alert("Escreva algo válido!"));
}
