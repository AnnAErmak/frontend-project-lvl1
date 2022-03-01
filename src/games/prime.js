import startRounds from '../index.js';

function isPrime(number) {
  if (number < 1) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function askQuestion() {
  const randomNumber = Math.floor(Math.random() * 20);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function startGamePrime() {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  startRounds(task, askQuestion);
}
