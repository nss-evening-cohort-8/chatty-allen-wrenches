
import{printToDom, printToDomEdit} from '../helpers/util.js';
import { editEvent, deleteEvent } from '../eventlisteners.js';

let messagesArray=[];

let userName = '';
let messageString = '';
let timeStamp = '';
let idCounter = 5;
let editing = 'no';
let newMsg;
let themeOption = '';

const setIdCounter = () => {
    idCounter++;
}

const getIdCounter = () => {
    return idCounter;
}

const setUserName = () => {
    userName = document.getElementById('inputUserNames')[document.getElementById('inputUserNames').selectedIndex].value;
}

const getUserName = () => {
    return userName;
}

<<<<<<< HEAD
function getThemeOption() {
    return themeOption;
}

function setMessageString(newValue) {
=======
const setMessageString = (newValue) => {
>>>>>>> master
    messageString = newValue;
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

const getMessagesz = () => {
    return messagesArray;
}

const messagesBuilder = (messagesArray) => {
    let newString = '';
    for(let i=0; i<messagesArray.length;i++){
    //newString+= `<div class="border border-primary">`;
    newString += `<div class="col-12 d-flex justify-content-center border border-bottom-1 rounded messageDiv" id="${messagesArray[i].id}">`
    // newString+= `<div class="d-flex justify-content-around">`;
    newString+= `<p class="nameClass flex-fill font-weight-bold">${messagesArray[i].name}:</p>`;
    newString+= `<p class="card-title flex-fill" id="messageId${[i]}">${messagesArray[i].message}</p>`;
    newString+= `<p class="card-title flex-fill font-weight-light">${messagesArray[i].time}</p>`;
    newString+= `<button type="button" class="btn btn-primary btn-sm editButton" id="editButton">Edit</button>`
    newString+= `<button type="button" class="btn btn-secondary btn-sm deleteButton" id="deleteButton">Delete</button>`
    // newString+= `</div>`;

    newString+= `</div>`;


    }
    printToDomEdit(newString,'messages');
    editEvent();
    deleteEvent();
}

const newMessage = () => {
    setUserName();
    setMessageString(document.getElementById('input').value);
    setTimeStamp(moment().format('LT'));
    setIdCounter();
    newMsg = {id: getIdCounter(), name: getUserName(), message: getMessageString(), time: getTimeStamp()};
    pushNewMessage();
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
        newMessage();
    }
}

const deleteMessage = () => {
    let deleteMe = event.target.closest('.messageDiv').id;
    console.log('deleteMe', deleteMe);
    for(let i = 0; i < messagesArray.length; i++) {
        console.log('messagesArray', messagesArray[i]);
        if(messagesArray[i].id == deleteMe) {
            messagesArray.splice(i, 1);
            break;
        }
    }
    messagesBuilder(getMessagesz());
}

export {getMessagesz, setMessages, messagesBuilder, saveEditMessage, beginEditMessage, deleteMessage};