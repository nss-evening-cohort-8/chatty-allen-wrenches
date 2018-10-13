import{getMessages} from './data/messageData.js'
import {messageSubmit} from '../javascripts/eventlisteners.js';

const initializeApp = () => {
    getMessages();
    messageSubmit();
}

initializeApp();