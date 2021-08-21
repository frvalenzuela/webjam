import { display_page, remove_pages } from "./renders.js";

export async function getAllPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const pokemonResults = await async function getMoreData(data) {
        const pokemonDataResult = {};
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
            const r = await fetch(element.url);
            const rData = await r.json();
            if (rData.abilities[0]) {
                const h1 = await fetch(rData.abilities[0].ability.url)
                const h1Data = await h1.json();
                rData.abilities[0] = {...rData.abilities[0], ...h1Data};
            }
            if (rData.abilities[1]) {
                const h1 = await fetch(rData.abilities[1].ability.url)
                const h1Data = await h1.json();
                rData.abilities[1] = {...rData.abilities[1], ...h1Data};
            }
            if (rData.abilities[2]) {
                const h1 = await fetch(rData.abilities[2].ability.url)
                const h1Data = await h1.json();
                rData.abilities[2] = {...rData.abilities[2], ...h1Data};
            }
            console.log(rData.abilities)

            pokemonDataResult[element.name] = rData;
        }
        return pokemonDataResult
    }(data)
    return(pokemonResults)
}

export async function getAllPokemonDataType(url) {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const pokemonResults = await async function getMoreData(data) {
        const pokemonDataResult = {};
        for (let i = 0; i < data.pokemon.length; i++) {
            const element = data.pokemon[i].pokemon;
            const r = await fetch(element.url);
            const rData = await r.json();
            pokemonDataResult[element.name] = rData;
        }
        return pokemonDataResult
    }(data)
    return(pokemonResults)
}

export async function getAllPokemonDataGen(url) {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.pokemon_species)
    const pokemonResults = await async function getMoreData(data) {
        const pokemonDataResult = {};
        for (let i = 0; i < data.pokemon_species.length; i++) {
            const element = data.pokemon_species[i];
            const ret = element.url.replace('-species','')
            const r = await fetch(ret);
            const rData = await r.json();
            console.log(rData);

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

export const add_pokemon_data = async(data, html_element, page, quantity, url) => {
    let start = page*quantity;
    let range_url = `?offset=${start}&limit=${quantity}`;
    let new_pokemon = await getAllPokemonData(url[0]+ url[1] + range_url);
    data = {...data, ...new_pokemon};
    await display_page(new_pokemon, html_element);
}

export const addListBtnMore = async(data, html_element, page, quantity, url) => {
    const btn = document.querySelector('.more');
    btn.addEventListener("click", async(e) => {
        page[0] += 1;
        const new_pokemons = await add_pokemon_data(data, html_element, page, quantity, url);
    });
}

export const apply_filters = async(data, html_element, url, page, filter_string, filter_type) => {

    remove_pages(html_element, page);
    page[0] = 0;
    let quantity = 8;
    let start = page[0]*quantity;
    let range_url = `?offset=${start}&limit=${quantity}`;
    url[1] = filter_type + '/';
    url[2] = filter_string;
    url[3] = range_url;
    if (filter_type === 'type') {
        data = await getAllPokemonDataType(url.join(''));
    } else {
        data = await getAllPokemonDataGen(url.join(''));
    }
    display_page(data, html_element);
}

export const check_correct_input = (filter_type, user_input) => {
    console.log(filter_type, user_input)
    if (filter_type === 'type') {
        const array_type = ['normal', 'fire', 'water', 'grass', 'flying',
        'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic',
        'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy'];
        let user_input_lower = user_input.toLowerCase();
        return array_type.includes(user_input_lower);
    } else if (filter_type === 'generation'){
        const array_generation = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let user_input_lower = user_input.toLowerCase();
        return array_generation.includes(user_input_lower);
    }
}

export const addListFilt = async(data, html_element, page, url, btn_class_element, filter_type) => {
    const btn = document.getElementById(btn_class_element);
    btn.addEventListener("change", async(e) => {
        let selector_type = document.getElementById("type");
        let selector_gen = document.getElementById("gen");
        if (selector_type.selectedIndex === 0 && selector_gen.selectedIndex === 0) {
            const pass = 'pass';
        } else {
            let input_box = btn.value;
            const btn_more = document.querySelector('.more');
            const div_parent  = btn_more.parentNode;
            let h1 = document.createElement('H1');
            h1.innerHTML = 'LOADING...';
            div_parent.appendChild(h1);
            btn_more.style.visibility='hidden';
            await apply_filters(data, html_element, url, page, input_box, filter_type);
            h1.style.display='none';

        }
    });
}

export const addListByType = async(data, html_element, page, url, btn_class_element) => {
    await addListFilt(data, html_element, page, url, btn_class_element, 'type');
}

export const addListByGen = async(data, html_element, page, url, btn_class_element) => {
    await addListFilt(data, html_element, page, url, btn_class_element, 'generation');
}

