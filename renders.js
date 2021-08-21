
export const display_page = (array_pokemon, array_elemnt) => {
  const btn = document.getElementById('btn-more');


  for (const single_pokemon in array_pokemon) {
    // Agregar elemento
    let card = document.createElement("DIV");
    card.className = 'card';
    card.draggable = true;
    card.id = single_pokemon;
    card.ondragstart= function(event) {
      event.dataTransfer.setData("Text", event.target.id);

      const modalContentTitle = document.getElementById("modalTitle");
      const modalContentImg = document.getElementById("modalImg");
      const modalHpBar = document.getElementsByClassName("hp-bar")[0];
      const modalAtkBar = document.getElementsByClassName("atk-bar")[0];
      const modalSpAtkBar = document.getElementsByClassName("sp-atk-bar")[0];
      const modalDefBar = document.getElementsByClassName("def-bar")[0];
      const modalSpDefBar = document.getElementsByClassName("sp-def-bar")[0];
      const modalSpeedBar = document.getElementsByClassName("speed-bar")[0];

      modalContentTitle.innerHTML = array_pokemon[single_pokemon].name;
      modalContentImg.src = array_pokemon[single_pokemon].sprites.front_default;
      modalHpBar.style.width = array_pokemon[single_pokemon].stats[0].base_stat;
      modalAtkBar.style.width = array_pokemon[single_pokemon].stats[1].base_stat;
      modalSpAtkBar.style.width = array_pokemon[single_pokemon].stats[2].base_stat;
      modalDefBar.style.width = array_pokemon[single_pokemon].stats[3].base_stat;
      modalSpDefBar.style.width = array_pokemon[single_pokemon].stats[4].base_stat;
      modalSpeedBar.style.width = array_pokemon[single_pokemon].stats[5].base_stat;
    };


    // Agregar imagen
    const img = document.createElement("img");
    img.src = array_pokemon[single_pokemon].sprites.front_default;
    img.draggable = false;
    card.appendChild(img)

    // Agregar nombre en grande
    let h1 = document.createElement('H1');
    h1.innerHTML = array_pokemon[single_pokemon].name;
    card.appendChild(h1);

    // Obtener modal
    let modal = document.getElementById("modal")

    // Agregar botón de modal
    // card.onclick = function() {
    //   const modalContentTitle = document.getElementById("modalTitle");
    //   const modalContentImg = document.getElementById("modalImg");
    //   const modalHpBar = document.getElementsByClassName("hp-bar")[0];
    //   const modalAtkBar = document.getElementsByClassName("atk-bar")[0];
    //   const modalSpAtkBar = document.getElementsByClassName("sp-atk-bar")[0];
    //   const modalDefBar = document.getElementsByClassName("def-bar")[0];
    //   const modalSpDefBar = document.getElementsByClassName("sp-def-bar")[0];
    //   const modalSpeedBar = document.getElementsByClassName("speed-bar")[0];

    //   modalContentTitle.innerHTML = array_pokemon[single_pokemon].name;
    //   modalContentImg.src = array_pokemon[single_pokemon].sprites.front_default;
    //   modalHpBar.style.width = array_pokemon[single_pokemon].stats[0].base_stat;
    //   modalAtkBar.style.width = array_pokemon[single_pokemon].stats[1].base_stat;
    //   modalSpAtkBar.style.width = array_pokemon[single_pokemon].stats[2].base_stat;
    //   modalDefBar.style.width = array_pokemon[single_pokemon].stats[3].base_stat;
    //   modalSpDefBar.style.width = array_pokemon[single_pokemon].stats[4].base_stat;
    //   modalSpeedBar.style.width = array_pokemon[single_pokemon].stats[5].base_stat;

    //   modal.style.display = "block";
    //   }
      
    // Agregar elementos al array de HTML
    let div1 = document.getElementById('data-grid').insertBefore(card, btn);
    array_elemnt.push(div1);

  }
}

export const remove_pages = (array_elemnt, page) => {
  if (page[0] <= 0) {
    page[0] -= 1;
  }
  array_elemnt.forEach(single_pokemon => {
      single_pokemon.remove();
  })
}

export const add_button = (class_element, class_name) => {
  let text_adding = document.createElement('span');
  let input_adding = document.createElement('input');
  let button_adding = document.createElement('button');
  text_adding.setAttribute('class', 'text-add');
  input_adding.setAttribute('class', 'input-add');
  button_adding.setAttribute('class', class_name);

  text_adding.innerText = 'newValue';
  button_adding.innerText = '+';

  document.querySelector(class_element).appendChild(text_adding);
  document.querySelector(class_element).appendChild(input_adding);
  document.querySelector(class_element).appendChild(button_adding);
}