const printToDom = (stringToPrint) => {
    const printHere = document.getElementById("messages");
    printHere.innerHTML += stringToPrint;
}

const printToDomEdit = (stringToPrint) => {
    const printHere = document.getElementById("messages");
    printHere.innerHTML = stringToPrint;
}

export {printToDom, printToDomEdit};
