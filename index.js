const array = []
function writeCards(name, event){
    for (let i = 0; i < name.length; i++) {
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return array
}

function countDown(int){
let countdown = int 
while (int >= 0) {
    console.log(int--)
}
}