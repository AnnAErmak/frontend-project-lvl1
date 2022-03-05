import startRounds from '../index.js';
import getRandomInt from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}
function generateRound() {
  const num = getRandomInt(0, 10);
  const question = `Question: ${num}`;
  const answer = (isEven(num)) ? 'yes' : 'no';
  return [question, answer];
}
export default function startGameEven() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  startRounds(task, generateRound);
}
