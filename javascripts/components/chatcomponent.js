// Rich's code starts here

import {writeToDom, addToDom} from '../helpers/util.js';

function deleteMessage() {
    let deleteMe = event.target.closest('.');
    messageBuilder();
}

export {deleteMessage};