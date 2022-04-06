#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
    let i = 1;

    while (i <= 3) {
        const num = Math.floor(Math.random() * 100);
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer? ');
        const wrongYes = `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
        const wrongNo = `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;

        if (num % 2 === 0 && answer === 'yes') {
            console.log('Correct!');
            i += 1;
        } else if (num % 2 === 0 && answer !== 'yes') {
            console.log(wrongYes);
            i += 4;
        } else if (num % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
            i += 1;
        } else if (num % 2 !== 0 && answer !== 'no') {
            console.log(wrongNo);
            i += 4;
        } 
    } 

    if (i === 4) {
        console.log(`Congratulations, ${userName}!`);
    }
}
evenGame();

export default evenGame;