'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const checkBtn = document.querySelector('.check');
const guessValue = document.querySelector('.guess');
const messageLabel = document.querySelector('.message');
const secretNumberLabel = document.querySelector('.number');
const scoreLabel = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const highscoreLabel = document.querySelector('.highscore');

const displayMessage = function (message) {
  messageLabel.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessValue.value);
  if (!guess) {
    displayMessage('🚫 No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    secretNumberLabel.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    secretNumberLabel.style.width = '30rem';

    // Set highscore
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      scoreLabel.textContent = score;
    } else {
      displayMessage('You lost the game :(');
      scoreLabel.textContent = 0;
      secretNumberLabel.textContent = secretNumber;
    }
  }
});

// Reset the game
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  scoreLabel.textContent = score;
  displayMessage('Start guessing...');
  secretNumberLabel.textContent = '?';
  guessValue.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberLabel.style.width = '15rem';
});
