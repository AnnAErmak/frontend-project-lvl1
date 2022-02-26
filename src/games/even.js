import {helloGamer, startRounds} from "../index.js";
import readlineSync from "readline-sync";


export function startGameEven(){
    // let counter = 0
    const gamerName = helloGamer()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
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
    const randNumber = Math.floor(Math.random() * 10)
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('You answer: ');
    if (answer === 'yes' || answer === 'no') {

        if (randNumber % 2 === 0 && answer === 'yes') console.log('Correct!')
        if (randNumber % 2 !== 0 && answer === 'no')  console.log('Correct!')

        if (randNumber % 2 === 0 && answer === 'no') {
            console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.')
            return 'stop'
        }
        if (randNumber % 2 !== 0 && answer === 'yes') {
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.')
            return 'stop'
        }
    }else {
        return 'stop'
    }
}



/*
(function startGame(){
    let counter = 0
    console.log('Welcome to the Brain Games!')
    let gamerName = getGamerName() || 'аноним'
    console.log(`Hello, ${gamerName}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++){
        if(askQuestion() === 'stop'){
            stopGame(gamerName)
            break
        }
        counter ++
    }

    if (counter === 3) console.log(`Congratulations, ${gamerName}!`)
})()


function getGamerName(){
    return readlineSync.question('May I have your name? ');
}

function askQuestion(){
    const randNumber = Math.floor(Math.random() * 10)
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('You answer: ');
    if (answer === 'yes' || answer === 'no') {

        if (randNumber % 2 === 0 && answer === 'yes') console.log('Correct!')
        if (randNumber % 2 !== 0 && answer === 'no')  console.log('Correct!')

        if (randNumber % 2 === 0 && answer === 'no') {
            console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.')
            return 'stop'
        }
        if (randNumber % 2 !== 0 && answer === 'yes') {
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.')
            return 'stop'
        }
    }else {
        return 'stop'
    }
}

function stopGame(name){
    console.log(`Let\'s try again, ${name}`)
}
 */