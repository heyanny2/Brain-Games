import randFromInt from '../util.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const randNum = randFromInt(0, 100);
  const statement = `${randNum}`;
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [correctAnswer, statement];
};

export { generateRound, gameRules };
