var generatedNumber;
var player1tries = 0;
var player2tries = 0;

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
var footer = document.querySelector('footer');
var nameBtn = document.querySelector('#nameBtn');
var p1NameInput = document.querySelector('#p1Name');
var p2NameInput = document.querySelector('#p2Name');

rangeBtn.addEventListener('click', setNumber);
p1Btn.addEventListener('click', attemptP1);
p2Btn.addEventListener('click', attemptP2);
nameBtn.addEventListener('click', setNames);

function setNames() {
  console.log(p1NameInput.value);
  console.log(p2NameInput.value);
  document.querySelector('#player1Name').innerText = p1NameInput.value;
  document.querySelector('#player2Name').innerText = p2NameInput.value;
  document.querySelector('#player-name-prompt').classList.add('hide')
}

function setNumber() {
  if ((minGuess.value !== '') && (maxGuess.value !== '')) {
    generatedNumber = parseInt(generateRandomNumber(minGuess.value, maxGuess.value))
    randomNumber.innerText = generatedNumber;
  }
  document.querySelector('#range').classList.add('hide')
  document.querySelector('#player-name-prompt').classList.remove('hide')
  minGuess.value = '';
  maxGuess.value = '';
}

function generateRandomNumber(low, high) {
  var range = high - low;
  var randomDecimal = Math.random();
  var base = (range * randomDecimal);
  return Math.floor(base) + parseInt(low)
}

function attemptP1() {
  var p1answer = checkAnswer(player1Guess.value);
  player1tries++;
  var player1Name = document.querySelector('#player1Name')
  if (p1answer === 'You Win!') {
    createWinnerObject(player1Name.innerText, player1tries);
  }
  p1tries.innerText = player1tries;
  console.log("p1answer:::", p1answer);
  p1Feedback.innerText = p1answer;
  player1Guess.value = '';
}

function attemptP2() {
  var p2answer = checkAnswer(player2Guess.value);
  player2tries++;
  var player2Name = document.querySelector('#player2Name')
  if (p2answer === 'You Win!') {
    createWinnerObject(player2Name.innerText, player2tries);
  }
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

function createWinnerObject(name, tries) {
  document.querySelector('#range').classList.remove('hide');
  generatedNumber = '';
  randomNumber.innerText = generatedNumber;
  player1tries = 0;
  player2tries = 0;
  footer.insertAdjacentHTML('beforeEnd', `
      <div class="winnerCard">
        <p>Winner!</p>
        <p>${name}</p>
        <p>tries: ${tries}</p>
      </div>
  `)
}