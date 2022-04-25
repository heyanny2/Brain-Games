import randFromInt from '../util.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (length, pitch) => {
  const result = [];
  let start = randFromInt(1, 10);
  for (let i = 0; i < length; i += 1) {
    result.push(start);
    start += pitch;
  }
  return result;
};

const generateRound = () => {
  const progressionLength = randFromInt(5, 10);
  const progressionPitch = randFromInt(1, 10);
  const progression = getProgression(progressionLength, progressionPitch);
  const randIndex = randFromInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randIndex]);
  progression[randIndex] = '..';
  const statement = progression.join(' ');
  return [correctAnswer, statement];
};

export { generateRound, gameRules };
