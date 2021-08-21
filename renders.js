
export const display_page = (array_pokemon, array_elemnt) => {
  for (const single_pokemon in array_pokemon) {
    const h = document.createElement("DIV");
    h.className = 'card';
    const img = document.createElement("img");
    img.src = array_pokemon[single_pokemon].sprites.front_default;
    h.appendChild(img)
    const h1 = document.createElement('H1');
    h1.innerHTML = single_pokemon;
    h.appendChild(h1);

    const div1 = document.getElementById('data-grid').appendChild(h);
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

// export { remove_pages, add_button, display_page };