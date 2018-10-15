import {setBots} from '../components/chatbot.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setBots(data.bots);
}

function executeThisCodeIfXhrFails () {
    console.log('it broke')
}

const getBots = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', '../../db/bots.json');
    myRequest.send();
};

export{getBots};