import randFromInt from '../util.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const answer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameData = () => {
  const randNum = randFromInt(0, 100);
  const statement = `${randNum}`;
  const correctAnswer = answer(randNum);
  return [correctAnswer, statement];
};

export { gameData, gameRules };
