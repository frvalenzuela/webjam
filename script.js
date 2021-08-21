import { display_page, remove_pages, add_button } from "./renders.js";
import { getAllPokemonData,  filter_by_type, filter_by_gen, addListBtnMore } from "./services.js";


const page = [0];
const quantity = 8;
let start = page[0]*quantity;
let url_start = 'https://pokeapi.co/api/v2/'
let query = 'pokemon';
let range_url = `?offset=${start}&limit=${quantity}`;
const url = [url_start, query, range_url];
let data = await getAllPokemonData(url[0] + url[1] + url[2]);
const html_element = [];

display_page(data, html_element);
remove_pages(html_element, page);
// data = await filter_by_type('fire');
// display_page(data, html_element);

add_button('.filters', 'filter-by-type');


// Click fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
}

addListBtnMore(data, html_element, page, quantity, url);

const array_h1 = [];
