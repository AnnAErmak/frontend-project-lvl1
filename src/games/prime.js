import startRounds from '../index.js';
import getRandomInt from '../utils.js';

function isPrime(number) {
  if (number < 1) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const randomNumber = getRandomInt(2, 20);
  const question = `Question: ${randomNumber}`;
  const answer = (isPrime(randomNumber)) ? 'yes' : 'no';

  return [question, answer];
}

export default function startGamePrime() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startRounds(task, generateRound);
}
