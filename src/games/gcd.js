import startRounds from '../index.js';
import randomValue from '../utils.js';

function nod(num1, num2) {
  let first = num1;
  let second = num2;
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
  const num1 = randomValue(10, 100);
  const num2 = randomValue(10, 100);
  const question = `Question: ${num1} ${num2}`;
  const answer = nod(num1, num2);
  return [question, String(answer)];
}

export default function startGameGcd() {
  const task = 'Find the greatest common divisor of given numbers.';

  startRounds(task, generateRound);
}
