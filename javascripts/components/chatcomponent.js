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
            document.getElementById('input').focus;
            editing = editMe;
            break;
        }
}

function saveEditMessage() {
    if(editing !== 0) {
        for(let i = 0; i < messagesArray.length; i++) {
            if(messagesArray[i].id === editing) {
                messagesArray[i].message = document.getElementById('input');
                messagesArray[i].time = event.timeStamp;
                editing = 0;
                break;
            }
        }
    }
}

export{getMessagesz,setMessages,messagesBuilder, beginEditMessage, saveEditMessage};