import{getMessages} from './data/messageData.js'
import {messageSubmit, botObserver} from '../javascripts/eventlisteners.js';
import {getBots} from './data/chatBotData.js';

const initializeApp = () => {
    getMessages();
    messageSubmit();
    getBots();
    botObserver();
}

initializeApp();