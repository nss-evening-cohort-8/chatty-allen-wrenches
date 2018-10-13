import {messagesBuilder, newMessage, getMessagesz} from './chatcomponent.js';

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
    return (Math.floor(Math.random() * 3) + 3);
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
        newMessage(this);
        this.responding = 'no';
        setInterval(delayedBuilder, random()*1000);
    }

}

export {setBots, getBot, getBotArray};