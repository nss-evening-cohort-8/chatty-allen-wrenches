import{setMessages,getMessagesz,messagesBuilder} from '../components/chatcomponent.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setMessages(data.messagesArray);
    messagesBuilder(getMessagesz());
    console.log(data.messagesArray)
}

function executeThisCodeIfXhrFails () {
    console.log('it broke')
}


const getMessages = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', '../../db/messages.json');
    myRequest.send();
};

export{getMessages};