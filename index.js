// Code your solutions in this file
let writeCards = (names, event_name) => {
  let thankYouMessages = []
  for(let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
  }
  return thankYouMessages
}


let countDown = (number) => {
  let next_number = number
  while(next_number >= 0) {
    console.log(next_number);
    next_number--;
  }
}
