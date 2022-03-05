import startRounds from '../index.js';
import randomValue from '../utils.js';

const rangeLength = 10;

function getProgression() {
  const progression = [];
  let firstNumber = randomValue(0, 20);
  const step = randomValue(3, 10);

  for (let i = 0; i <= rangeLength; i += 1) {
    progression.push(firstNumber);
    firstNumber += step;
  }
  return progression;
}
function generateRound() {
  const hiddenIndex = randomValue(0, 10);
  const progression = getProgression();
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, String(answer)];
}
export default function startGameProgression() {
  const task = 'What number is missing in the progression?';

  startRounds(task, generateRound);
}
