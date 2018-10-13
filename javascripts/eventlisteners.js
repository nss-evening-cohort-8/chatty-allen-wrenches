import {saveEditMessage, messagesBuilder, getMessagesz, beginEditMessage, deleteMessage} from './components/chatcomponent.js';
import {getBotArray} from './components/chatbot.js';

const messageSubmit = () => {
    document.getElementById('inputForm').addEventListener('submit', function() {
        event.preventDefault();
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}

const editEvent = () => {
    let editors = document.getElementsByClassName('editButton');
    for(let i=0; i < editors.length; i++) {
        editors[i].addEventListener('click', function() {
            beginEditMessage(event);
        })
    }
}

const deleteEvent = () => {
    let deleters = document.getElementsByClassName('deleteButton');
    for(let i = 0; i < deleters.length; i++) {
        deleters[i].addEventListener('click', function() {
            deleteMessage();
        })
    }
}

const botObserver = () => {
    const observerCallBack = function(mutationsList) {
        for(const mutation of mutationsList) {
            if (mutation.type == 'childList') {
                let arrayLast = getMessagesz().length - 1;
                let lastMessage = getMessagesz()[arrayLast].message;
                let botsArray = getBotArray();
                for(let i = 0; i < botsArray.length; i++) {
                    let correctIndex = botsArray[i].hear.indexOf(lastMessage)
                    if(correctIndex !== -1) {
                        botsArray[i].receive();
                        botsArray[i].currentResponse = botsArray[i].response[correctIndex];
                        botsArray[i].say();
                    }
                }
            }        
        }
    };
    const observer = new MutationObserver(observerCallBack);
    observer.observe(document.getElementById('messages'), {childList: true});
    
       
}

export {messageSubmit, editEvent, deleteEvent, botObserver};