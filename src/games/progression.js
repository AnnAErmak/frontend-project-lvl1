import { helloGamer, startRounds } from "../index.js";
import readlineSync from "readline-sync";


export function startGameProgression(){
    const gamerName = helloGamer()
    console.log('What number is missing in the progression?')
    startRounds(askQuestion, gamerName)
}


function askQuestion(){
    const prog = []
    const hiddenInx = Math.floor(Math.random() * 10)
    let firstNumber = Math.floor(Math.random() * 20)
    let step = 0
    do {
        step = Math.floor(Math.random() * 10)
    } while (step < 2)

    for (let i = 0; i <= 10; i++){
        prog.push(firstNumber)
        firstNumber += step
    }
    const correctAnswer = prog[hiddenInx]
    prog[hiddenInx] = '..'
    console.log(`Question: ${prog.join(' ')}`)
    const answer = readlineSync.question('You answer: ');

    if (+answer === correctAnswer){
        console.log('Correct!')
    }else{
        console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'.`)
        return 'stop'
    }
}
