const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}

function writeCards(array, event) {
    let thankyouCards = []
    for (let i = 0; i < array.length; i++) {
        thankyouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankyouCards
}

function countDown(count) {
    let i = 0; 
    while (i <= count){
        console.log(i)
        i ++
    }
}