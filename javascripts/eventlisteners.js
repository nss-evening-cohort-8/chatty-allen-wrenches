import {saveEditMessage, messagesBuilder, getMessagesz, beginEditMessage} from './components/chatcomponent.js';

function messageSubmit() {
    document.getElementById('inputForm').addEventListener('submit', function() {
        event.preventDefault();
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}

function editEvent() {
    let editors = document.getElementsByClassName('editButton');
    for(let i=0; i < editors.length; i++) {
        editors[i].addEventListener('click', function() {
            beginEditMessage(event);
        })
    }
}

export {messageSubmit, editEvent};