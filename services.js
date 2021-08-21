export async function getAllPokemonData(url) {
    const response = await fetch(url);
    return response.json();
}


const display_page = (array_pokemon, array_elemnt) => {
    array_pokemon.forEach(single_pokemon => {

        // Agregar elemento
        let h = document.createElement("DIV");
        h.className = 'card';

        // Agregar nombre en grande
        let h1 = document.createElement('H1');
        h1.innerHTML = single_pokemon.name;
        h.appendChild(h1);

        // Agregar botón de modal
        let modalBttn = document.createElement("button");
        modalBttn.innerHTML = "ver mas xd";
        modalBttn.id = `${single_pokemon.name}-modalButton`
        modalBttn.onclick = function() {
            modal.style.display = "block";
            h.style.backgroundColor = "blue";
            console.log(`Viendo mas para ${single_pokemon.name}`)
          }
          
        h.appendChild(modalBttn);

        // Agregar modal
        let modal = document.createElement("div");
        modal.id = `${single_pokemon.name}-modal`
        modal.className = "modal"

        let modalContent = document.createElement("span");
        modalContent.id = `${single_pokemon.name}-modalContent`
        modalContent.className = "modal-content"

        let closeBttn = document.createElement("span");
        closeBttn.id = `${single_pokemon.name}-closeBttn`
        closeBttn.onclick = function() {
            modal.style.display = "none";
          }
          
        // Introducir elementos
        h.appendChild(modal)
        modal.appendChild(closeBttn);
        modal.appendChild(modalContent);


        // Añadir HTML al modal
        modalContent.innerHTML = `<h1>${single_pokemon.name}</h1>`;

        // Click fuera del modal, cerrarlo
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }

        // Agregar elementos al array de HTML
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
