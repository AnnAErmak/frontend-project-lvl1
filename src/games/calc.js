import startRounds from '../index.js';
import randomValue from '../utils/utils.js';

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
  const firstNumber = randomValue(10);
  const secondNumber = randomValue(10);
  const arrOperator = ['+', '-', '*'];
  const randomIndex = randomValue(3);
  const randomOperator = arrOperator[randomIndex];
  const question = `Question: ${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, randomOperator, secondNumber);
  return [question, correctAnswer];
}

export default function startGameCalc() {
  const task = 'What is the result of the expression?';

  startRounds(task, askQuestion);
}
