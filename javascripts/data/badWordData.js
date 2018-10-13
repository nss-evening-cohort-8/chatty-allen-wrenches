import{setBadWords,getBadWordsz} from '../components/chatcomponent.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setBadWords(data.badWordsArray);
    getBadWordsz();
}

function executeThisCodeIfXhrFails () {
    console.log('it broke')
}

const getBadWords = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', '../../db/badWords.json');
    myRequest.send();
};

export{getBadWords};