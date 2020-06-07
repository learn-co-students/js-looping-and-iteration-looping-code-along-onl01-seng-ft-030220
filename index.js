function writeCards(name, event) {
    let message = []
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown(num) {
    while ( num > 0) {
        console.log(num);
        num -=1;
    }
    console.log(num);
}
