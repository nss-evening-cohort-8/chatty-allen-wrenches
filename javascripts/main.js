import{getMessages} from './data/messageData.js'
import {messageSubmit} from '../javascripts/eventlisteners.js';
import{getBadWords} from './data/badWordData.js'

const initializeApp = () => {
    getBadWords();
    getMessages();
    messageSubmit();
}

initializeApp();