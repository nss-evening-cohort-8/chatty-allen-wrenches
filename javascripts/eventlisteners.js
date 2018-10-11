<<<<<<< HEAD
import {saveEditMessage, messagesBuilder, getMessagesz, setMessages} from './components/chatcomponent.js';
=======
import {saveEditMessage, messagesBuilder, getMessagesz, beginEditMessage, deleteMessage} from './components/chatcomponent.js';
>>>>>>> master

function messageSubmit() {
    document.getElementById('inputForm').addEventListener('submit', function() {
        event.preventDefault();
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}
const messageSubmitClick = () => {
    document.getElementById('sendButton').addEventListener('click', function() {
        event.preventDefault();
        saveEditMessage();
        messagesBuilder(getMessagesz());
        document.getElementById('input').value = '';
    })
}

const makeDark = () => {
    document.getElementById('darkTheme').addEventListener("click", () => {
        document.body.style.background = "rgb(36, 34, 34)";
        document.getElementById('messages').style.color = "white";
    })
}

const makeTextLarge = () => {
    document.getElementById('largeText').addEventListener("click", () => {
        document.getElementById('messages').style.fontSize = "150%";
    })
}

const clearMessages = () => {
    const clearMessagesButton = document.getElementById('clearMessages');
    clearMessagesButton.addEventListener("click", (e) => {
        e.preventDefault();
        setMessages([]);
        messagesBuilder(getMessagesz);
        // const messagesToClear = buttonClicked
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

function deleteEvent() {
    let deleters = document.getElementsByClassName('deleteButton');
    for(let i = 0; i < deleters.length; i++) {
        deleters[i].addEventListener('click', function() {
            deleteMessage();
        })
    }
}

export {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, editEvent, deleteEvent};
