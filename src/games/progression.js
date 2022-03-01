import startRounds from '../index.js';
import randomValue from '../utils/utils.js';

function askQuestion() {
  const prog = [];
  const hiddenInx = randomValue(10);
  let firstNumber = randomValue(20);
  let step = 0;
  do {
    step = randomValue(10);
  } while (step < 2);

  for (let i = 0; i <= 10; i += 1) {
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
