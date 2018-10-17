// DOM selection
const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');


// function that gets a team name
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
        .then(convertToJson)
        .then(getPokemonName)
        .then(drawName)

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
}
main();