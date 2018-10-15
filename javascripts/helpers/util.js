const printToDom = (stringToPrint) => {
    const printHere = document.getElementById("messages");
    printHere.innerHTML += stringToPrint;
}

const printToDomEdit = (stringToPrint) => {
    const printHere = document.getElementById("messages");
    printHere.innerHTML = stringToPrint;
}

const printGif = (stringToPrint) => {
    document.getElementById('gifDisplayDiv').innerHTML = stringToPrint;
}

export {printToDom, printToDomEdit, printGif};