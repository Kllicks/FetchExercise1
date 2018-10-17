// Add "previous" and "next" buttons
// Draw a list, then make each item clickable. On click, show a modal with the details.
// Add buttons to sort and filter the list of data.

// DOM selection
const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');
const prevElement = document.querySelector('[data-prev]');
const nextElement = document.querySelector('[data-next]');


// function that gets a pokemon name
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then(convertToJson)
        .then(getPokemonName)
        .then(drawName)
}
// Attempt at next/prev button
function getNextPokemon(currentPokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then(r => r.json)
        .then(currentPokemon => currentPokemon.name)
    let index = r.indexOf(currentPokemon);
    index++;
    if (index === r.length) {
        index = 0;
    }
    return r[index];
}
function getPrevPokemon(currentPokemon){
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then(r => r.json)
        .then(currentPokemon => currentPokemon.name)
    let index = r.indexOf(currentPokemon);
    index--;
    if (index < 0) {
        index = r.length - 1;
    }
    return r[index];
}

function convertToJson(r) {
    return r.json();
}

function getPokemonName(nameObj) {
    return nameObj.name;
}

function drawName(nameText) {
    const newName = document.createElement('li');
    newName.textContent = nameText;
    outputElement.appendChild(newName);
}

function main() {
    triggerElement.addEventListener('click', getPokemon);
    prevElement.addEventListener('click', getPrevPokemon);
    nextElement.addEventListener('click', getNextPokemon);

}
main();