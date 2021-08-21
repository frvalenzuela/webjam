

export async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

export async function getAllPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // const pokemonResult = await async function x(data) {
    //     const pokemonDataResult = {}
    //     await data.results.forEach( async (pokemon) => {
    //     const r = await fetch(pokemon.url);
    //     const rData = await r.json();
    //     pokemonDataResult[pokemon.name] = rData;
    //     console.log(rData, pokemon.name)})
    //     return pokemonDataResult }(data);
    // return pokemonResult
    const pokemonResults = await async function getMoreData(data) {
        const pokemonDataResult = {};
        console.log('start', data)
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            console.log(element)
            const r = await fetch(element.url);
            const rData = await r.json();
            console.log(rData)
            pokemonDataResult[element.name] = rData;
        }
        console.log(pokemonDataResult)
        console.log('end')
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
