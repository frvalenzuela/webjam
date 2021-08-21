import { display_page, remove_pages, add_button } from "./renders.js";
import { getAllPokemonData,  filter_by_type, filter_by_gen, addListBtnMore, addListByType, addListByGen, addListFilt } from "./services.js";


const page = [0];
const quantity = 8;
let start = page[0]*quantity;
let url_start = 'https://pokeapi.co/api/v2/'
let query = 'pokemon';
let range_url = `?offset=${start}&limit=${quantity}`;
const url = [url_start, query, range_url];
const data = await getAllPokemonData(url[0] + url[1] + url[2]);
const html_element = [];

display_page(data, html_element);
// remove_pages(html_element, page);
// data = await filter_by_type('fire');
// display_page(data, html_element);

//add_button('.filters', 'filter-by-type');
//addListByType(data, html_element, page, url, '.filter-by-type');


//add_button('.filters', 'filter-by-gen');
//addListByGen(data, html_element, page, url, '.filter-by-gen');

// Click fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}

addListBtnMore(data, html_element, page, quantity, url);

let selector_type = document.getElementById("type");
let selector_gen = document.getElementById("gen");

selector_type.addEventListener("change", function() {
    selector_gen.selectedIndex = 0;
    console.log(selector_type.value);
});

addListByType(data, html_element, page, url, 'type');

selector_gen.addEventListener("change", function() {
    selector_type.selectedIndex = 0;
    console.log(selector_gen.value);
});

addListByGen(data, html_element, page, url, 'gen');


// addListFilt(data, html_element, page, url, selector_gen, "generation");
