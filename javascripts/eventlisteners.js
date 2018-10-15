import {getBotArray} from './components/chatbot.js';
import {saveEditMessage, messagesBuilder, getMessagesz, setMessages, beginEditMessage, deleteMessage, badWordInput, emojisInput} from './components/chatcomponent.js';

const messageSubmit = () => {
    document.getElementById('inputForm').addEventListener('submit', function() {
        emojisInput();
        badWordInput();
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
    const darkThemeButton = document.getElementById('darkTheme');
    darkThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("darkTheme");
    document.getElementById("messages").classList.toggle("darkThemeBubble");
    document.getElementById("bigDiv").classList.toggle("darkThemeBubble");
    }
)}
const makeBubbleGum = () => {
    document.getElementById('modalSave').addEventListener("click", (e) => {
        const optionArray = document.getElementById('themeOptions').children;
        if (optionArray[1].selected) {
            document.body.style.background = "#f02fb6";
            document.getElementById('messages').style.background = "#e773c4";
            document.getElementById('chatBox').style.background = "#e773c4";
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
            document.getElementById('chatBox').style.background = "#6be1ff";
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
            document.getElementById('chatBox').style.background = "#fd3f32";
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
            document.getElementById('chatBox').style.background = "#1adb00";
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
            document.getElementById('chatBox').style.background = "#9c1ef0";
            document.getElementById('messages').style.color = "white";

        }
    }
)}

const makeTextLarge = () => {
    document.getElementById('largeText').addEventListener("click", () => {
        document.getElementById('messages').classList.toggle("largeText");
    })
}

const australiaMode = () => {
    document.getElementById('ausMode').addEventListener("click", (e) => {
        document.body.style.background = "#00843D";
            document.getElementById('messages').style.background = "#FFCD00";
            document.getElementById('chatBox').style.background = "#FFCD00";
            document.getElementById('messages').style.color = "white";
            ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
                document.body.style[prefix + 'transform'] = 'rotate(180deg)';
            });
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

export {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, editEvent, deleteEvent, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal, botObserver,  australiaMode};