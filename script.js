
async function getData(url) {
    const response = await fetch(url);

    return response.json();
}

const filter_by_gen = filter => {
    
}

const data = await getData('https://pokeapi.co/api/v2/pokemon?limit=1000');

const all_pokemon = data.results;

const test = await getData(all_pokemon[0].url);
console.log(test.sprites.front_default);

const array_h1 = [];

all_pokemon.forEach(single_pokemon => {
    let h = document.createElement("DIV");
    h.className = 'card';
    let h1 = document.createElement('H1');
    let t = document.createTextNode(single_pokemon.name);
    h1.appendChild(t);
    h.appendChild(h1);
    document.getElementById('data-grid').appendChild(h);
})
