import {helloGamer, startRounds} from "../index.js";
import readlineSync from "readline-sync";

export function startGameGcd(){
    // let counter = 0
    const gamerName = helloGamer()
    console.log('Find the greatest common divisor of given numbers.')
    startRounds(askQuestion, gamerName)
    // for (let i = 0; i < 3; i++){
    //     if(askQuestion() === 'stop'){
    //         stopGame(gamerName)
    //         break
    //     }
    //     counter ++
    // }
    // if (counter === 3) console.log(`Congratulations, ${gamerName}!`)
}

function askQuestion(){
    const firstNumber = Math.floor(Math.random() * 100)
    const secondNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${firstNumber} ${secondNumber}`)
    const result = nod(firstNumber, secondNumber)
    const answer = readlineSync.question('You answer: ');
    if (+answer === result){
        console.log('Correct!')
    }else{
        console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${result}\'.`)
        return 'stop'
    }
}

function nod(first, second) {
    while (first !== second) {
        if (first > second) {
            first = first - second;
        }
        else {
            second = second - first;
        }
    }
    return  first;
}
