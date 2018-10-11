import{getMessages} from './data/messageData.js'
import {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge} from '../javascripts/eventlisteners.js';

function initializeApp() {
    getMessages();
    messageSubmit();
    messageSubmitClick();
    clearMessages();
    makeDark();
    makeTextLarge();
}

initializeApp();
