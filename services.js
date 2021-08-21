

export async function getData(url) {
    const response = await fetch(url);
    return response.json();
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
