console.log("Welcome to the Brain Games!");
import readlineSync from 'readline-sync';
export const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');