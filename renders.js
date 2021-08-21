
export const display_page = (array_pokemon, array_elemnt) => {
  for (const single_pokemon in array_pokemon) {
    /* const h = document.createElement("DIV");
    h.className = 'card';
    
    const h1 = document.createElement('H1');
    h1.innerHTML = single_pokemon;
    h.appendChild(h1);

    const div1 = document.getElementById('data-grid').appendChild(h);
    array_elemnt.push(div1);  */
    
    // Agregar elemento
    let h = document.createElement("DIV");
    h.className = 'card';

    // Agregar imagen
    const img = document.createElement("img");
    img.src = array_pokemon[single_pokemon].sprites.front_default;
    h.appendChild(img)

    // Agregar nombre en grande
    let h1 = document.createElement('H1');
    h1.innerHTML = array_pokemon[single_pokemon].name;
    h.appendChild(h1);



    // Obtener modal
    let modal = document.getElementById("modal")

    // Agregar botón de modal
    let modalBttn = document.createElement("button");
    modalBttn.innerHTML = "ver mas xd";
    modalBttn.onclick = function() {
      let modalContent = document.getElementById("modalContent")
      modalContent.innerHTML = `<h1>${array_pokemon[single_pokemon].name}</h1>`
      modal.style.display = "block";
        
      }
      
    h.appendChild(modalBttn);

    // Agregar elementos al array de HTML
    let div1 = document.getElementById('data-grid').appendChild(h);
    array_elemnt.push(div1);
  }
}

export const remove_pages = (array_elemnt) => {
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
