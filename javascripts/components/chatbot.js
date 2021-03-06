import {messagesBuilder, newMessage, getMessagesz, badWordInput} from './chatcomponent.js';


let botArray = [];

const getBotArray = () => {
    return botArray;
}

const setBots = (botData) => {
    for(let i = 0; i < botData.length; i++) {
        let botName = botData[i].name;
        window[botName] = new bot(botData[i]);
        botArray.push(window[botName]);
    }
}

const getBot = (theBot) => {
    return theBot;
}

const random = () => {
    return (Math.floor(Math.random() * 5) + 7);
}

const delayedBuilder = () => {
    messagesBuilder(getMessagesz());
}

class bot {
    constructor(botData) {
        this.state = 'happy';
        this.name = botData.name;
        this.hear = botData.hear;
        this.response = botData.response;
    }

    receive() {
        this.responding = 'yes';
    }

    say() {
        badWordInput();
        newMessage(this);
        this.responding = 'no';
        setTimeout(delayedBuilder, random()*1000);
    }

}

export {setBots, getBot, getBotArray};