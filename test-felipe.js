
async function getData(url) {
    const response = await fetch(url);

    return response.json();
}

const hide_h1_element = (array_element) => {
    array_element.style.display = "none";
}

const show_h1_element = (array_element) => {
    array_element.style.display = "flex";
}

const hide_by_range = (array_element, begin, end) => {
    let count = 0;
    array_element.forEach((element) => {
        count += 1;
        if (count > begin && count <= end) {
            show_h1_element(element);
        } else {
            hide_h1_element(element);
        }
    }
}

const filter_by_gen = (array_html_elements, number_gen) => {
    
    if (number_gen === 1) {
        hide_by_range(0,151);
    } else if (number_gen === 2) {
        hide_by_range(152,251);
    } else if (number_gen === 3) {
        hide_by_range(252,386);
    } else if (number_gen === 4) {
        hide_by_range(387,493);
    } else if (number_gen === 5) {
        hide_by_range(494,649);
    } else if (number_gen === 6) {
        hide_by_range(650,721);
    } else if (number_gen === 7) {
        hide_by_range(722,809);
    } else if (number_gen === 8) {
        hide_by_range(810,900);
    }
}

const data = await getData('https://pokeapi.co/api/v2/pokemon?limit=1000');

const all_pokemon = data.results;

const test = await getData(all_pokemon[0].url);
console.log(test.sprites.front_default);

const array_h1 = [];

all_pokemon.forEach(single_pokemon => {
    let h = document.createElement("H1");
    let t = document.createTextNode(single_pokemon.name);
    h.appendChild(t);
    array_h1.push(h);
    document.body.appendChild(h);
})

array_h1[0].style.display = "none"
array_h1[0].style.display = "block"