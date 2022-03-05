import startRounds from '../index.js';
import randomValue from '../utils.js';

function calc(firstNumber, randomOperator, secondNumber) {
  let result = 0;
  switch (randomOperator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown operator received: '${randomOperator}'!`);
  }
  return result;
}
function generateRound() {
  const num1 = randomValue(1, 10);
  const num2 = randomValue(1, 10);
  const operations = ['+', '-', '*'];
  const operatorIndex = randomValue(0, 2);
  const operator = operations[operatorIndex];
  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = calc(num1, operator, num2);
  return [question, String(answer)];
}

export default function startGameCalc() {
  const task = 'What is the result of the expression?';

  startRounds(task, generateRound);
}
