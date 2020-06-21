// Code your solutions in this file
function countDown(number) {
    while (number > -1) {
        console.log(number)
        number--;
    }

}

function writeCards(namesArray, eventName) {
    let thank_you_messages = [];
    for (let i = 0; i < namesArray.length; i++) {
        thank_you_messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)

    }
    return thank_you_messages;
}
