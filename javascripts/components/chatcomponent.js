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
    let deleteMe = event.target.closest('.messageDiv').id;
    for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].id === deleteMe) {
            messagesArray.splice(i, 1);
            break;
        }
    }
    messageBuilder();
}

export{getMessagesz,setMessages,messagesBuilder, deleteMessage}
