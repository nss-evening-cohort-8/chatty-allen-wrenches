import{getMessages} from './data/messageData.js'
import {messageSubmit} from '../javascripts/eventlisteners.js';

function initializeApp() {
    getMessages();
    messageSubmit();
}

initializeApp();