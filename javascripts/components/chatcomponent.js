import{printToDom, printToDomEdit} from '../helpers/util.js'

let messagesArray=[];

let userName = '';
let messageString = '';
let timeStamp = '';
let idCounter = 0;
let deletedCounter = 0;

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
    newString += `<div class="col-12 d-flex justify-content-center " id="${messagesArray[i].id}">`
    newString+= `<h4 class="nameClass">${messagesArray[i].name}</h4>`;
    newString+= `<p class="card-title">${messagesArray[i].message}</p>`;
    newString+= `<p class="card-title">${messagesArray[i].time}</p>`;
    newString+= `<button type="button" class="btn btn-secondary" id="editButton">Edit</button>`
    newString+= `<button type="button" class="btn btn-secondary" id="deleteButton">Delete</button>`
    newString+= `</div>`;
    //newString+= `</div>`;


}
printToDom(newString,'messages');
}

export{getMessagesz,setMessages,messagesBuilder}