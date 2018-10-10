import { deleteMessage } from "./components/chatcomponent.js";

console.log('this is event listeners js');

function deleteEvent() {
    let deleters = document.getElementsByClassName('deleteButton');
    for(let i = 0; i < deleters.length; i++) {
        deleters[i].addEventListener('click', function() {
            deleteMessage();
        })
    }
}

export {deleteEvent};