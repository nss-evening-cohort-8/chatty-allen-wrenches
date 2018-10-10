import{printToDom, printToDomEdit} from '../helpers/util.js';
import { editEvent } from '../eventlisteners.js';

let messagesArray=[];

let userName = '';
let messageString = '';
let timeStamp = '';
let idCounter = 5;
let editing = 'no';
let newMsg;

function setIdCounter() {
    idCounter++;
}

function getIdCounter() {
    return idCounter;
}

function setUserName(newValue) {
    userName = newValue;
}

function getUserName() {
    return userName;
}

function setMessageString(newValue) {
    messageString = newValue;
}

function getMessageString() {
    return messageString;
}

function setTimeStamp(newValue) {
    timeStamp = newValue;
}

function getTimeStamp() {
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
    newString += `<div class="col-12 d-flex justify-content-center messageDiv" id="${messagesArray[i].id}">`
    newString+= `<h4 class="nameClass">${messagesArray[i].name}</h4>`;
    newString+= `<p class="card-title">${messagesArray[i].message}</p>`;
    newString+= `<p class="card-title">${messagesArray[i].time}</p>`;
    newString+= `<button type="button" class="btn btn-secondary editButton" id="editButton">Edit</button>`
    newString+= `<button type="button" class="btn btn-secondary deleteButton" id="deleteButton">Delete</button>`
    newString+= `</div>`;
    //newString+= `</div>`;


    }
    printToDomEdit(newString,'messages');
    editEvent();
}

function newMessage() {
    setUserName('Waka Flaka');
    setMessageString(document.getElementById('input').value);
    setTimeStamp(event.timeStamp);
    setIdCounter();
    newMsg = {id: getIdCounter(), name: getUserName(), message: getMessageString(), time: getTimeStamp()};
    pushNewMessage();
}

function pushNewMessage() {
    let tempMsg = getMessagesz();
    tempMsg.push(newMsg);
    if(tempMsg.length > 20) {
        tempMsg.shift();
    }
    setMessages(tempMsg);
}

function beginEditMessage() {
    let editMe = event.target.closest('.messageDiv').id;
    for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].id === editMe) {
            document.getElementById('input').value = messagesArray[i].message;
            document.getElementById('input').focus;
            editing = editMe;
            break;
        }
    }
}

function saveEditMessage() {
    if(editing !== 'no') {
        for(let i = 0; i < messagesArray.length; i++) {
            if(messagesArray[i].id === editing) {
                messagesArray[i].message = document.getElementById('input').value;
                messagesArray[i].time = event.timeStamp;
                editing = 'no';
                break;
            }
        }
    }
    else {
        newMessage();
    }
}

export {getMessagesz, setMessages, messagesBuilder, saveEditMessage, beginEditMessage};