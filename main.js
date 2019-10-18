var generatedNumber;
var player1tries = 0;
var player2tries = 0;

var winner = {
  title: 'Winner!!',
  name: '',
  tries: 1,
}

var randomNumber = document.querySelector('#randomNumber');
var minGuess = document.querySelector('#minGuess');
var maxGuess = document.querySelector('#maxGuess');
var rangeBtn = document.querySelector('#rangeBtn');
var player1Guess = document.querySelector('#p1Guess');
var player2Guess = document.querySelector('#p2Guess');
var p1Btn = document.querySelector('#p1Btn');
var p2Btn = document.querySelector('#p2Btn');
var p1Feedback = document.querySelector('#p1Feedback');
var p2Feedback = document.querySelector('#p2Feedback');
var p1tries = document.querySelector('#p1tries');
var p2tries = document.querySelector('#p2tries');

rangeBtn.addEventListener('click', setNumber);
p1Btn.addEventListener('click', attemptP1);
p2Btn.addEventListener('click', attemptP2);

function setNumber() {
  if ((minGuess.value !== '') && (maxGuess.value !== '')) {
    generatedNumber = parseInt(generateRandomNumber(minGuess.value, maxGuess.value))
    randomNumber.innerText = generatedNumber;
  }
}

function generateRandomNumber(low, high) {
  randomDecimal = Math.random()
  return Math.floor((randomDecimal * high) + low);
}

function attemptP1() {
  var p1answer = checkAnswer(player1Guess.value);
  player1tries++;
  p1tries.innerText = player1tries;
  console.log("p1answer:::", p1answer);
  p1Feedback.innerText = p1answer;
  player1Guess.value = '';
}

function attemptP2() {
  var p2answer = checkAnswer(player2Guess.value);
  player2tries++;
  p2tries.innerText = player2tries;
  console.log("p2answer:::", p2answer);
  p2Feedback.innerText = p2answer;
  player2Guess.value = '';
}

function checkAnswer(guess) {
  console.log("generatedNumber", generatedNumber);
  var guess = parseInt(guess);
  console.log("guess:::", guess)
  if (guess < generatedNumber) {
    return 'Too Low'
  } else if (guess > generatedNumber) {
    return 'Too High'
  } else if (guess === generatedNumber) {
    return 'You Win!'
  } else {
    return 'Not even trying??'
  }
}