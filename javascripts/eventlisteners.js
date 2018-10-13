import {saveEditMessage, messagesBuilder, getMessagesz, setMessages, beginEditMessage, deleteMessage} from './components/chatcomponent.js';

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
        document.getElementById('messages').style.background = "rgb(36, 34, 34)";
        document.getElementById('messages').style.color = "white";
    }
)}
const makeBubbleGum = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[1].selected) {
            document.body.style.background = "#f02fb6";
            document.getElementById('messages').style.background = "#e773c4";
            document.getElementById('messages').style.color = "white";

        }
    }
)}
const makeFrost = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[2].selected) {
            document.body.style.background = "#0955c7";
            document.getElementById('messages').style.background = "#6be1ff";
            document.getElementById('messages').style.color = "white";

        }
    }
)}
const makeFire = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[3].selected) {
            document.body.style.background = "#ca0303";
            document.getElementById('messages').style.background = "#fd3f32";
            document.getElementById('messages').style.color = "white";

        }
    }
)}
const makeGreen = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[4].selected) {
            document.body.style.background = "#00a008";
            document.getElementById('messages').style.background = "#1adb00";
            document.getElementById('messages').style.color = "white";

        }
    }
)}
const makeRoyal = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[5].selected) {
            document.body.style.background = "#7b00ce";
            document.getElementById('messages').style.background = "#9c1ef0";
            document.getElementById('messages').style.color = "white";

        }
    }
)}

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

export {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, editEvent, deleteEvent, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal};
