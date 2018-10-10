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

export{getMessagesz,setMessages,messagesBuilder}