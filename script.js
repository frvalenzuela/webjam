import { display_page, remove_pages, add_button } from "./renders.js";
import { getAllPokemonData,  filter_by_type, filter_by_gen, addListBtnMore } from "./services.js";


const page = 0;
const quantity = 8;
let start = page*quantity;
let url = `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${quantity}`;
let data = await getAllPokemonData(url);
const html_element = [];

display_page(data, html_element);
// remove_pages(html_element);
// data = await filter_by_type('fire');
// display_page(data, html_element);

add_button('.filters');

// Click fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
}

addListBtnMore(data, html_element, page, quantity);

const array_h1 = [];

