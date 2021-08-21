
export const display_page = (array_pokemon, array_elemnt) => {
  const btn = document.getElementById('btn-more');

  for (const single_pokemon in array_pokemon) {
    // Agregar elemento
    let card = document.createElement("DIV");
    card.className = 'card';

    // Agregar imagen
    const img = document.createElement("img");
    img.src = array_pokemon[single_pokemon].sprites.front_default;
    card.appendChild(img)

    // Agregar nombre en grande
    let h1 = document.createElement('H1');
    h1.innerHTML = array_pokemon[single_pokemon].name;
    card.appendChild(h1);

    // Obtener modal
    let modal = document.getElementById("modal")

    // Agregar botón de modal
    card.onclick = function() {
      const modalContent = document.getElementById("modalContent")
      // modalContent.innerHTML = `<h1 class='pokemon-title'>${array_pokemon[single_pokemon].name}</h1>`
      const div1 = document.createElement('DIV');
      const div2 = document.createElement('DIV');
      modalContent.appendChild(div1);
      modalContent.appendChild(div2);

      const h1ModalTitle = document.createElement('H1');
      h1ModalTitle.innerHTML = array_pokemon[single_pokemon].name;
      div1.appendChild(h1ModalTitle);

      modal.style.display = "block";
      }
      
    // Agregar elementos al array de HTML
    let div1 = document.getElementById('data-grid').insertBefore(card, btn);
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
