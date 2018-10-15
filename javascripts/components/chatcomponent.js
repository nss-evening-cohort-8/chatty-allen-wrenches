import{printToDom, printToDomEdit, printEmojis} from '../helpers/util.js';
import { editEvent, deleteEvent } from '../eventlisteners.js';
import {getSelectedGif} from './gifs.js';

let messagesArray=[];
let badWordsArray=[];
let emojis = {};
let emojifiedString = '';
let emojiKeys = [];
let userName = '';
let messageString = '';
let timeStamp = '';
let idCounter = 5;
let editing = 'no';
let available=true;
let newMsg;
let themeOption = '';

const setEmojis = (data) => {
    emojis = data;
    for(let i = 0; i < emojis.length; i++) {
        emojiKeys.push(Object.keys(emojis[i]));
    }
}

const getEmoji = () => {
    return emojis;
}

const getEmojiKeys = () => {
    return emojiKeys;
}

const setIdCounter = () => {
    idCounter++;
}

const getIdCounter = () => {
    return idCounter;
}

const setUserName = (source) => {
    if(source.responding === 'yes') {
        userName = source.name;
    }
    else {
    userName = document.getElementById('inputUserNames')[document.getElementById('inputUserNames').selectedIndex].value;
    }
}

const getUserName = () => {
    return userName;
}

const setMessageString = (source) => {
    if(source.responding === 'yes') {
        messageString = source.currentResponse;
    }
    else {
    messageString = source;
    }
}

const getMessageString = () => {
    return messageString;
}

const setTimeStamp = (newValue) => {
    timeStamp = newValue;
}

const getTimeStamp = () => {
    return timeStamp;
}

const setMessages = (newArray) => {
    messagesArray=newArray;
};

const setBadWords = (newArray) => {
    badWordsArray=newArray;
};

const getBadWordsz = () => {
    return badWordsArray;
}

const setAvailable= (avail) => {
available=avail;
}

const getAvailable = () => {
    return available;
}

const getMessagesz = () => {
    return messagesArray;
}

const messagesBuilder = (messageArray) => {
    let newString = '';
    for(let i=0; i<messageArray.length;i++){
    //newString+= `<div class="border border-primary">`;
    newString += `<div class="col-12 d-flex justify-content-center border border-bottom-1 rounded messageDiv" id="${messagesArray[i].id}">`
    // newString+= `<div class="d-flex justify-content-around">`;
    newString+= `<p class="nameClass flex-fill font-weight-bold nameText">${messagesArray[i].name}:</p>`;
    if(messageArray[i].gif !== undefined && messageArray[i].gif !== '') {
        newString+= `<p class="card-title flex-fill messageTextwImage" id="messageId${[i]}">${messagesArray[i].message}</p>`;
    }
    else {
        newString+= `<p class="card-title flex-fill messageText" id="messageId${[i]}">${messagesArray[i].message}</p>`;
    }
    if(messageArray[i].gif !== undefined && messageArray[i].gif !== '') {
        newString+= `<image src=${messageArray[i].gif} class='gifImageChosen'>`
    }   
    newString+= `<p class="card-title flex-fill font-weight-light timeText">${messagesArray[i].time}</p>`;
    newString+= `<button type="button" class="btn btn-primary btn-sm editButton" id="editButton">Edit</button>`
    newString+= `<button type="button" class="btn btn-secondary btn-sm deleteButton" id="deleteButton">Delete</button>`

    newString+= `</div>`;


    }
    printToDomEdit(newString,'messages');
    editEvent();
    deleteEvent();
}

const emojiBuilder = (emojis, emojiKeys) => {
    let emojiString = '';
    for(let i = 0; i <emojis.length; i++) {
        emojiString +=  `<div class='col-2 emojiCol'>`
        emojiString +=      `<p>${emojiKeys[i]}</p>`
        emojiString +=      `<p>${emojis[i][emojiKeys[i][0]]}</p>`
        emojiString +=  `</div>`
    }
    printEmojis(emojiString);
}

let badWordInput = () => {
    let badInputSplit = document.getElementById('input').value.split(' ');
    setAvailable(true)
    for(let i=0; i<badInputSplit.length;i++){
        
        for(let j=0;j<badWordsArray.length;j++){
        if(badInputSplit[i]==badWordsArray[j].badWord){
            setAvailable(false)
            alert(`${badWordsArray[j].badWord} is a bad word!`)
            break;
        }
    }
    }; 
};

const emojisInput = () => {
    let emojiSplit = document.getElementById('input').value.split(' ');
    for(let i = 0; i < emojiSplit.length; i++) {
        for(let j = 0; j < emojiKeys.length; j++) {
            if(emojiSplit[i] == emojiKeys[j]) {
                console.log('it worked');
                emojiSplit.splice(i, 1, emojis[j][emojiKeys[j]]);
            }
        }
    }
    emojifiedString = emojiSplit.join(' ');
    document.getElementById('input').value = emojifiedString;
}

const newMessage = (source) => {
    const availability = getAvailable();
    setUserName(source);
    setMessageString(source);
    setTimeStamp(moment().format('LT'));
    setIdCounter();
    setAvailable();
    newMsg = {id: getIdCounter(), name: getUserName(), message: getMessageString(), time: getTimeStamp(), available: getAvailable(), gif: getSelectedGif()};
    if(availability){
        pushNewMessage();
    } 
}

const pushNewMessage = () => {
    let tempMsg = getMessagesz();
    tempMsg.push(newMsg);
    if(tempMsg.length > 20) {
        tempMsg.shift();
    }
    setMessages(tempMsg);
}

const beginEditMessage = () => {
    let editMe = event.target.closest('.messageDiv').id;
    for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].id == editMe) {
            document.getElementById('input').value = messagesArray[i].message;
            document.getElementById('input').focus;
            editing = editMe;
            break;
        }
    }
}

const saveEditMessage = () => {
    if(editing !== 'no') {
        for(let i = 0; i < messagesArray.length; i++) {
            if(messagesArray[i].id == editing) {
                messagesArray[i].message = document.getElementById('input').value;
                messagesArray[i].time = moment().format('LT');
                editing = 'no';
                break;
            }
        }
    }
    else {
        newMessage(document.getElementById('input').value);
    }
}

const deleteMessage = () => {
    let deleteMe = event.target.closest('.messageDiv').id;
    for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].id == deleteMe) {
            messagesArray.splice(i, 1);
            break;
        }
    }
    messagesBuilder(getMessagesz());
}

export {getMessagesz, setMessages, messagesBuilder, saveEditMessage, beginEditMessage, deleteMessage, setBadWords, getBadWordsz, badWordInput, newMessage, setEmojis, getEmoji, emojisInput, emojiBuilder, getEmojiKeys};