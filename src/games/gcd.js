import startRounds from '../index.js';
import randomValue from '../utils/utils.js';

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
  return String(first);
}

function askQuestion() {
  const firstNumber = randomValue(100);
  const secondNumber = randomValue(100);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = nod(firstNumber, secondNumber);
  return [question, correctAnswer];
}

export default function startGameGcd() {
  const task = 'Find the greatest common divisor of given numbers.';

  startRounds(task, askQuestion);
}
