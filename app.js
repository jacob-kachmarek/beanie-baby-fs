/* Imports */
import { getBeanieBabies, getAstroSign } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
const selectEl = document.querySelector('select');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('form');

/* State */
let beanieBabiesData = [];

/* Events */
window.addEventListener('load', async () => {
    const beanie = await getBeanieBabies();
    beanieBabiesData = beanie;
    displayBeanieBabies();
    const astros = await getAstroSign();
    for (let astro of astros) {
        const option = document.createElement('option');
        option.value = astro.name;
        option.textContent = astro.name;
        selectEl.append(option);
    }
});

/* Display Functions */
function displayBeanieBabies() {
    beanieBabiesEl.textContent = '';
    for (let beanieBaby of beanieBabiesData) {
        const beanieBabyEl = document.createElement('div');
        const infoEl = document.createElement('p');
        const imgEl = document.createElement('img');
        infoEl.textContent = `Name: ${beanieBaby.title}`;
        imgEl.src = beanieBaby.image;
        beanieBabyEl.classList.add('beanie-baby');

        beanieBabyEl.append(infoEl, imgEl);
        beanieBabiesEl.append(beanieBabyEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
