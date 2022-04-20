import randFromInt from '../util.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const answer = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let div = 2; div <= (num / 2); div += 1) {
    if (num % div === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameData = () => {
  const randNum = randFromInt(1, 50);
  const statement = `${randNum}`;
  const correctAnswer = answer(randNum);
  return [correctAnswer, statement];
};

export { gameData, gameRules };
