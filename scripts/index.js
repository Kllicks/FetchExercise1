// Add "previous" and "next" buttons
// Draw a list, then make each item clickable. On click, show a modal with the details.
// Add buttons to sort and filter the list of data.

// DOM selection
const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');
const prevElement = document.querySelector('[data-prev]');
const nextElement = document.querySelector('[data-next]');
index = 0;
// function that gets a pokemon name
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(convertToJson)
        .then(getPokemonName)
        .then(drawName)
}

// Attempt at next/prev button
function getNextPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(convertToJson)
        .then(getPokemonName)
        .then(drawName)
        index++;
        // if (index = 949) {
        //     index = 0;
        // }
}
function getPrevPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(convertToJson)
        .then(getPokemonName)
        .then(drawName)
        index--;
        // if (index = 0) {
        //     index = 949;
        // }
}

function convertToJson(r) {
    let conversion =  r.json();
    // console.log(conversion);
    return conversion;
}

function getPokemonName(nameObj) {
    let name = nameObj.results[index].name; 
    // let name = nameObj.results.length;// this is 949
    console.log(name);
    return name;
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