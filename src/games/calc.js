import startRounds from '../index.js';
import getRandomInt from '../utils.js';

function calc(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator received: '${operator}'!`);
  }
  return result;
}
function generateRound() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operations = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, 2);
  const operator = operations[operatorIndex];
  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = calc(num1, operator, num2);
  return [question, String(answer)];
}

export default function startGameCalc() {
  const task = 'What is the result of the expression?';

  startRounds(task, generateRound);
}
