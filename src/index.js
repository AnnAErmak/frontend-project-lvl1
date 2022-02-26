import readlineSync from "readline-sync";

export function helloGamer(){
    console.log('Welcome to the Brain Games!')
    let gamerName = readlineSync.question('May I have your name? ') || 'аноним'
    console.log(`Hello, ${gamerName}!`)
    return gamerName
}

export function startRounds(func, name){
    let counter = 0
    for (let i = 0; i < 3; i++){
        if(func() === 'stop'){
            stopGame(name)
            break
        }
        counter ++
    }
    if (counter === 3) console.log(`Congratulations, ${name}!`)
}
export function stopGame(name){
    console.log(`Let\'s try again, ${name}`)
}