import readlineSync from 'readline-sync';

export default function getNameGamer(){
    const name = readlineSync.question('May I have your name? ');
    if (!name){
        getNameGamer()
    }else {
        console.log(`Hello, ${name}!`)
    }
}

