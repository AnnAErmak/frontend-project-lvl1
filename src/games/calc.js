import {helloGamer, stopGame} from "../index.js";
import readlineSync from "readline-sync";


export function startGameCalc(){
    let counter = 0
    const gamerName = helloGamer()
    console.log('What is the result of the expression?')
    for (let i = 0; i < 3; i++){
        if(askQuestion() === 'stop'){
            stopGame(gamerName)
            break
        }
        counter ++
    }
    if (counter === 3) console.log(`Congratulations, ${gamerName}!`)
}
function askQuestion(){
    const firstNumber = Math.floor(Math.random() * 10)
    const secondNumber = Math.floor(Math.random() * 10)
    const arrOperator = ['+', '-', '*']
    const randomIndex = Math.floor(Math.random() * arrOperator.length )
    const randomOperator = arrOperator[randomIndex]
    let result = 0

    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`)

    switch (randomIndex){
        case 0:
            result = firstNumber + secondNumber
            break
        case 1:
            result = firstNumber - secondNumber
            break
        case 2:
            result = firstNumber * secondNumber
            break
        default:
            break
    }
    const answer = readlineSync.question('You answer: ');
    if (+answer === result){
        console.log('Correct!')
    }else{
        console.log(`\'${answer}\' is wrong answer ;(. Correct answer was \'${result}\'.`)
        return 'stop'
    }


}
