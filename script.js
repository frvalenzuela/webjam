
async function getData(url) {
    const response = await fetch(url);

  return response.json();
}

const data = await getData('https://pokeapi.co/api/v2/pokemon?limit=1000');

const all_pokemon = data.results;

console.log(all_pokemon[0]);

all_pokemon.forEach(single_pokemon => {
    let h = document.createElement("H1");
    let t = document.createTextNode(single_pokemon.name);
    h.appendChild(t);
    document.body.appendChild(h);
})