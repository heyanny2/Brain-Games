import randFromInt from '../util.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findCorrectAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;
  let temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return temp;
};

const gameData = () => {
  const randomNum1 = randFromInt(1, 100);
  const randomNum2 = randFromInt(1, 100);
  const statement = `${randomNum1} ${randomNum2}`;
  const correctAnswer = String(findCorrectAnswer(randomNum1, randomNum2));
  return [correctAnswer, statement];
};

export { gameData, gameRules };
