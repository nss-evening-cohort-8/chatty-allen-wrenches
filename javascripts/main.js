import{getMessages} from './data/messageData.js'
import {getBots} from './data/chatBotData.js';
import {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal, botObserver, australiaMode, gifSearchEvent, gifImageEvent, gifSelectEvent} from '../javascripts/eventlisteners.js';
import{getBadWords} from './data/badWordData.js';
import {getEmojis} from './data/emojisdata.js';

const initializeApp = () => {
    australiaMode();
    getBadWords();
    getMessages();
    getEmojis();
    messageSubmit();
    getBots();
    botObserver();
    messageSubmitClick();
    clearMessages();
    makeDark();
    makeTextLarge();
    makeGreen();
    makeRoyal();
    makeFire();
    makeFrost();
    makeBubbleGum();
    gifSearchEvent();
    gifImageEvent();
    gifSelectEvent();
}

initializeApp();