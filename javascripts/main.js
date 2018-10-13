import{getMessages} from './data/messageData.js'
import {getBots} from './data/chatBotData.js';
import {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal, botObserver, australiaMode} from '../javascripts/eventlisteners.js';

const initializeApp = () => {
    australiaMode();
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