import { display_page } from "./renders.js";

export async function getAllPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const pokemonResults = await async function getMoreData(data) {
        const pokemonDataResult = {};
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            const r = await fetch(element.url);
            const rData = await r.json();
            pokemonDataResult[element.name] = rData;
        }
        return pokemonDataResult
    }(data)
    return(pokemonResults)
}



// Filtro por Tipo
export async function filter_by_type(type){

    let data = await getData(`https://pokeapi.co/api/v2/type/${type}`);
    
    let clean_data = [];

    data.pokemon.forEach( single_pokemon => {
        clean_data.push({
            name: single_pokemon.pokemon.name,
            url: single_pokemon.pokemon.url
        })
    })

    return clean_data;
}

// Filtro por Generacion
export async function filter_by_gen(gen){

    let data = await getData(`https://pokeapi.co/api/v2/generation/1/${gen}/`);
    
    let clean_data = [];

    data.pokemon.forEach( single_pokemon => {
        clean_data.push({
            name: single_pokemon.pokemon.name,
            url: single_pokemon.pokemon.url
        })
    })
    return clean_data;
}

export const add_pokemon_data = async(data, html_element, page, quantity) => {
    let start = page*quantity;
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${quantity}`;
    console.log(url);
    let new_pokemon = await getAllPokemonData(url);
    data = {...data, ...new_pokemon};
    await display_page(new_pokemon, html_element);
}

export const addListBtnMore = async(data, html_element, page, quantity) => {
    const btn = document.querySelector('.more');
    btn.addEventListener("click", async(e) => {
        page += 1;
        const new_pokemons = await add_pokemon_data(data, html_element, page, quantity);
    });
}
