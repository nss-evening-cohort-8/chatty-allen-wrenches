<<<<<<< HEAD
import {saveEditMessage, messagesBuilder, getMessagesz} from './components/chatcomponent.js';

function messageSubmit() {
    document.getElementById('inputForm').addEventListener('submit', function() {
        event.preventDefault();
        console.log(event.target);
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}

export {messageSubmit};
=======
import {printToDom, printToDomEdit} from './helpers/util.js'

>>>>>>> master
