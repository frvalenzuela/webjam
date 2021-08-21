

export async function getData(url) {
    const response = await fetch(url);
    return response.json();
}


const display_page = (array_pokemon, array_elemnt) => {
    array_pokemon.forEach(single_pokemon => {

        // console.log(single_pokemon)

        let h = document.createElement("DIV");
        h.className = 'card';
        let h1 = document.createElement('H1');
        h1.innerHTML = single_pokemon.name;
        h.appendChild(h1);
        let div1 = document.getElementById('data-grid').appendChild(h);
        array_elemnt.push(div1);
    })
}

const remove_pages = (array_elemnt) => {
    array_elemnt.forEach(single_pokemon => {
        single_pokemon.remove();
    })
}

export const add_button = (class_element) => {
    let text_adding = document.createElement('span');
    let input_adding = document.createElement('input');
    let button_adding = document.createElement('button');
    text_adding.setAttribute('class', 'text-add');
    input_adding.setAttribute('class', 'input-add');
    button_adding.setAttribute('class', 'button-add');

    text_adding.innerText = 'newValue';
    button_adding.innerText = '+';

    document.querySelector(class_element).appendChild(text_adding);
    document.querySelector(class_element).appendChild(input_adding);
    document.querySelector(class_element).appendChild(button_adding);
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



export { display_page, remove_pages};