import startRounds from '../index.js';
import randomValue from '../utils.js';

function nod(fir, sec) {
  let first = fir;
  let second = sec;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  return first;
}

function generateRound() {
  const firstNumber = randomValue(10, 100);
  const secondNumber = randomValue(10, 100);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const answer = nod(firstNumber, secondNumber);
  return [question, String(answer)];
}

export default function startGameGcd() {
  const task = 'Find the greatest common divisor of given numbers.';

  startRounds(task, generateRound);
}
