import {helloGamer, startRounds} from "../index.js";
import readlineSync from "readline-sync";


export function startGamePrime(){
    const gamerName = helloGamer()
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    startRounds(askQuestion, gamerName)
}


function askQuestion(){
    const randomNumber = Math.floor(Math.random() * 20)
    console.log(`Question: ${randomNumber}`)
    const res = isPrime(randomNumber)
    const answer = readlineSync.question('You answer: ');
    if (answer === res){
        console.log('Correct!')
    }else{
        console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${res}\'.`)
        return 'stop'
    }
}

function isPrime(number){
    if (number < 1) return 'yes'
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'no'
        }
    }
    return 'yes'
}
