

export async function getData(url) {
    const response = await fetch(url);
    return response.json();
}


const display_page = (array_pokemon, array_elemnt) => {
    array_pokemon.forEach(single_pokemon => {
        let h = document.createElement("DIV");
        h.className = 'card';
        let h1 = document.createElement('H1');
        let t = document.createTextNode(single_pokemon.name);
        h1.appendChild(t);
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

// Filtro por Tipo
export async function filter_by_type(type){

    let data = await getData(`https://pokeapi.co/api/v2/type/${type}`);
    
    return data.pokemon
}

// Filtro por Generacion
export async function filter_by_gen(gen){

    let data = await getData(`https://pokeapi.co/api/v2/generation/1/${gen}/`);
    
    return data.pokemon
}



export { display_page, remove_pages};