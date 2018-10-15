import {setGifs, getGifSearch, gifDisplayer} from '../components/gifs.js';

function executeThisCodeAfterFileLoaded () {
    const gifData = JSON.parse(this.responseText);
    setGifs(gifData.data);
    gifDisplayer();
}

function executeThisCodeIfXhrFails () {
    console.log('it broke')
}

const getGifs = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=vqJ3V1pBU7zpaDuYgV3nHNo5NcFaIp3B&q=${getGifSearch().text}&limit=${getGifSearch().number}&offset=0&rating=G&lang=en`);
    myRequest.send();
};

export{getGifs};