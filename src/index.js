import readlineSync from "readline-sync";

export function helloGamer(){
    console.log('Welcome to the Brain Games!')
    let gamerName = readlineSync.question('May I have your name? ') || 'аноним'
    console.log(`Hello, ${gamerName}!`)
    return gamerName
}

export function stopGame(name){
    console.log(`Let\'s try again, ${name}`)
}