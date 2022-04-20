export default (min, max) => {
  const randNum = Math.random() * (max - min) + min;
  return Math.floor(randNum);
};
