'use strict';
// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //another way to select element id
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionaly
btnRoll.addEventListener('click', function () {
  // 1. Genrat a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for roll 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
