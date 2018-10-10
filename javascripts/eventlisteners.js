import {saveEditMessage, messagesBuilder, getMessagesz} from './components/chatcomponent.js';

function messageSubmit() {
    document.getElementById('inputForm').addEventListener('submit', function() {
        event.preventDefault();
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}

export {messageSubmit};