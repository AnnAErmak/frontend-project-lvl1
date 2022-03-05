import startRounds from '../index.js';
import randomValue from '../utils.js';

function isEven(number) {
  return !(number % 2);
}
function askQuestion() {
  const randNumber = randomValue(0, 10);
  const question = `Question: ${randNumber}`;
  const correctAnswer = (isEven(randNumber)) ? 'yes' : 'no';
  return [question, correctAnswer];
}
export default function startGameEven() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';

  startRounds(task, askQuestion);
}
