import readlineSync from 'readline-sync';

const startEngine = (gameData, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const [correctAnswer, statement] = gameData();
    console.log(`Question: ${statement}`);
    const answer = readlineSync.question('Your answer? ');
    if (answer !== correctAnswer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
