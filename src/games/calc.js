const gameRules = 'What is the result of the expression?';

const randomOperator = () => {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return '+';
    } if (rand === 1) {
        return '-';
    } if (rand === 2) {
        return '*';
    }
};

const findCorrectAnswer = (num1, operator, num2) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
};

const gameData = () => {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randOperator = randomOperator();
    const statement = `${randomNum1} ${randOperator} ${randomNum2}`;
    const correctAnswer = String(findCorrectAnswer(randomNum1, randOperator, randomNum2));
    return [correctAnswer, statement];
};

export { gameData, gameRules };
