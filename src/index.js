import readlineSync from 'readline-sync';

const numberRounds = 3;

export default function startRounds(task, getDataGame) {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ') || 'аноним';
  console.log(`Hello, ${gamerName}!`);
  console.log(task);
  for (let i = 0; i < numberRounds; i += 1) {
    const [question, correctAnswer] = getDataGame();
    console.log(question);
    const answer = readlineSync.question('You answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${gamerName}!`);
}
