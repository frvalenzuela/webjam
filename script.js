import { display_page, remove_pages, add_button } from "./renders.js";
import { getAllPokemonData,  filter_by_type, filter_by_gen } from "./services.js";


let data = await getAllPokemonData('https://pokeapi.co/api/v2/pokemon?limit=5');
const html_element = [];

display_page(data, html_element);
// remove_pages(html_element);
// data = await filter_by_type('fire');
// display_page(data, html_element);

add_button('.filters');

const array_h1 = [];

