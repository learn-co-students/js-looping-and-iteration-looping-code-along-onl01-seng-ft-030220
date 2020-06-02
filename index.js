// Code your solutions in this file
const writeCards = (names, occasion) => {
  let messages = []
  for (let i=0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return messages
}

function countDown(int) {
  while (int > -1) {
    console.log(int)
    int--
  }
}