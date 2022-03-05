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
      break;
  }
  return String(result);
}
function askQuestion() {
  const firstNumber = randomValue(1, 10);
  const secondNumber = randomValue(1, 10);
  const operations = ['+', '-', '*'];
  const randomIndex = randomValue(0, 2);
  const randomOperator = operations[randomIndex];
  const question = `Question: ${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, randomOperator, secondNumber);
  return [question, correctAnswer];
}

export default function startGameCalc() {
  const task = 'What is the result of the expression?';

  startRounds(task, askQuestion);
}
