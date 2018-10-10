import {setUserName, setMessageString, setTimeStamp, setIdCounter, getUserName, getMessageString, getTimeStamp, getIdCounter} from './components/chatcomponent.js';

function newMessage() {
    document.getElementById('input').addEventListener('submit', function() {
        setUserName();
        setMessageString(document.getElementById('input').value);
        setTimeStamp(event.timeStamp);
        setIdCounter();
        let newMsg = {name: getUserName(), message: getMessageString(), time: getTimeStamp(), id: getIdCounter()};
    })
}

export {newMessage};