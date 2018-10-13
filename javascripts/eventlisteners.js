import {saveEditMessage, messagesBuilder, getMessagesz, beginEditMessage, deleteMessage,badWordInput} from './components/chatcomponent.js';

const messageSubmit = () => {
    document.getElementById('inputForm').addEventListener('submit', function() {
        badWordInput();
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

export {messageSubmit, editEvent, deleteEvent};