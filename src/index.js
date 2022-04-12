import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);


const gameTemplate = (gameData, gameRules) => {
  let i = 1;

  while (i <= 3) {
    const [correctAnswer, statement] = gameData();
    console.log(gameRules);
    console.log(`Question: ${statement}`);
    const answer = readlineSync.question('Your answer? ');
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;

    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== correctAnswer) {
      console.log(wrongAnswer);
      i += 4;
    }
  }

  if (i === 4) {
   console.log(`Congratulations, ${userName}!`);
  }
};


export default gameTemplate;
