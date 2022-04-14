const gameRules = 'What number is missing in the progression?';

const randFromInt = (min, max) => {
  const randNum = Math.random() * (max - min) + min;
  return Math.floor(randNum);
};

const gameData = () => {
  const randDifference = randFromInt(1, 10);
  const rand = randFromInt(1, 10);
  const progressionLength = randFromInt(5, 10);
  const progression = [];
  let start = rand;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start);
    start += randDifference;
  }
  const randIndex = randFromInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randIndex]);
  progression[randIndex] = '..';
  const statement = progression.join(' ');
  return [correctAnswer, statement];
};

export { gameData, gameRules };
