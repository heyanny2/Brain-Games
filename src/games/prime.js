import randFromInt from '../util.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let div = 2; div <= (num / 2); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randNum = randFromInt(1, 50);
  const statement = `${randNum}`;
  const correctAnswer = isPrime(randNum) ? 'yes' : 'no';
  return [correctAnswer, statement];
};

export { generateRound, gameRules };
