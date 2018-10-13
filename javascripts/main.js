import{getMessages} from './data/messageData.js'
<<<<<<< HEAD
import {messageSubmit, botObserver} from '../javascripts/eventlisteners.js';
import {getBots} from './data/chatBotData.js';
=======
import {messageSubmit, messageSubmitClick, clearMessages, makeDark, makeTextLarge, makeBubbleGum, makeFrost, makeFire, makeGreen, makeRoyal} from '../javascripts/eventlisteners.js';
>>>>>>> master

const initializeApp = () => {
    getMessages();
    messageSubmit();
<<<<<<< HEAD
    getBots();
    botObserver();
=======
    messageSubmitClick();
    clearMessages();
    makeDark();
    makeTextLarge();
    makeGreen();
    makeRoyal();
    makeFire();
    makeFrost();
    makeBubbleGum();

>>>>>>> master
}

initializeApp();

// const optionArray = document.getElementById('themeOptions').children;
// console.log(optionArray[1].value);

// optionArray.forEach((option) => {
//     if (optionArray[i].value == ) {

//     }
// })

// const makeBubbleGum = (e) => {
//     const options = e.getElementById('themeOptions');
//     console.log(options.children[1]);
//     // options.children[1].addEventListener("click", (e) => {
//     //     console.log(e.target.);
//         // if () {
//         //     document.body.style.background = "rgb(36, 34, 34)";
//         //     document.getElementById('bigDiv').style.background = "rgb(36, 34, 34)";
//         //     document.getElementById('messages').style.color = "white";
//         // }
//     }

// makeBubbleGum();