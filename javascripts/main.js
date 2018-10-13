import{getMessages} from './data/messageData.js'
import {getBots} from './data/chatBotData.js';
import {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal, botObserver} from '../javascripts/eventlisteners.js';

const initializeApp = () => {
    getMessages();
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
}

initializeApp();