import startRounds from '../index.js';
import randomValue from '../utils.js';

const rangeLength = 10;
function askQuestion() {
  const prog = [];
  const hiddenInx = randomValue(0, 10);
  let firstNumber = randomValue(0, 20);
  const step = randomValue(3, 10);

  for (let i = 0; i <= rangeLength; i += 1) {
    prog.push(firstNumber);
    firstNumber += step;
  }
  const correctAnswer = prog[hiddenInx];
  prog[hiddenInx] = '..';
  const question = `Question: ${prog.join(' ')}`;
  return [question, String(correctAnswer)];
}
export default function startGameProgression() {
  const task = 'What number is missing in the progression?';

  startRounds(task, askQuestion);
}
