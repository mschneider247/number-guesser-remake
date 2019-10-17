var randomNumber = document.querySelector('#randomNumber');

console.log("randomNumber===", randomNumber);

function generateRandomNumber(low, high) {
  randomDecimal = Math.random()
  return Math.floor((randomDecimal * high) + low);
}

randomNumber.innerText = (generateRandomNumber(1, 10));