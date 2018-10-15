import {printGif} from '../helpers/util.js';

let gifs = [];
let gifSearch = {text: '', number: ''};
let gifURL = '';
let chosenGif = '';
let selectedGif = '';

const setGifs = (data) => {
    gifs = data;
}

const getGifz = () => {
    return gifs;
}

const getGifSearch = () => {
    return gifSearch;
}

const setChosenGif = (clickedOn) => {
    let idNum = clickedOn.replace('gifImage', '');
    chosenGif = gifs[idNum].images.preview_gif.url;
}

const setSelectedGif = () => {
    selectedGif = chosenGif;
}

const getSelectedGif = () => {
    return selectedGif;
}

const gifSearchInput = (gify) => {
    gify.text = document.getElementById('gifInput').value;
    gify.number = document.getElementById('numberInput').value;
    gify.number++
}

const gifDisplayer = () => {
    let domString = '';
    domString += `<div id='gifImageDiv>`
    for(let i = 0; i < gifs.length; i++) {
        domString += `<image src=${gifs[i].images.preview_gif.url} class='gifImage' id='gifImage${i}'>`
    }
    domString += `</div>`;
    printGif(domString);
}

const resetGif = () => {
    chosenGif = '';
    selectedGif = '';
}

export {setGifs, getGifz, getGifSearch, gifSearchInput, gifDisplayer, setChosenGif, resetGif, setSelectedGif, getSelectedGif};