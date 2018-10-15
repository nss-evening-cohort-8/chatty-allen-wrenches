import{setEmojis, getEmoji, emojiBuilder, getEmojiKeys} from '../components/chatcomponent.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setEmojis(data.emojis);
    emojiBuilder(getEmoji(), getEmojiKeys());
}

function executeThisCodeIfXhrFails () {
    console.log('it broke')
}

const getEmojis = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', '../../db/emojis.json');
    myRequest.send();
};

export{getEmojis};