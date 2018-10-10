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

let editing = 0;

function beginEditMessage() {
    let editMe = event.target.closest('.messageDiv').id;
    for(let i = 0; i < messagesArray.length; i++) {
        if(messagesArray[i].id === editMe) {
            document.getElementById('input').value = messagesArray[i].message;
            editing = 1;
            break;
        }
}

function saveEditMessage() {
    if(editing === 1) {
        messagesArray[].message = document.getElementById('input');
        messagesArray[].message = event.timeStamp;
    }
}

export{getMessagesz,setMessages,messagesBuilder, beginEditMessage};