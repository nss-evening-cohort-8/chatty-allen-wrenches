import {writeToDom, addToDom} from '../helpers/util.js';

let messagesArray=[];

const setMessages = (newArray) => {
    messagesArray=newArray;
};

const getMessagesz = () => {
    return messagesArray;
}

const messagesBuilder = (messagesArray) => {
    console.log('this is messages Builder function')
}

// Rich's code starts here

function deleteMessage() {
    let deleteMe = event.target.closest('.');
    messageBuilder();
}

export{getMessagesz,setMessages,messagesBuilder, deleteMessage}
