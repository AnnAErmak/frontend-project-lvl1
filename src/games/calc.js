import startRounds from '../index.js';
import getRandomInt from '../utils.js';

function calc(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator received: '${operator}'!`);
  }
}
function generateRound() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operations = ['+', '-', '*'];
  const operatorIndex = getRandomInt(0, operations.length - 1);
  const operator = operations[operatorIndex];
  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = calc(num1, operator, num2);
  return [question, String(answer)];
}

export default function startGameCalc() {
  const task = 'What is the result of the expression?';

  startRounds(task, generateRound);
}
