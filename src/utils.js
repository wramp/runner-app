//Please splice the following string at random positions into the body of the post: "The Toronto Raptors are going to win the finals"
const addStringToRandomPosition = (origin, text) => {
  const originArray = origin.split(" ");
  const numberOfWords = originArray.length;

  let range = getRandomRange(0, numberOfWords);
  originArray.splice(range, 0, text);

  return originArray.join(" ");
};

const toTitleCase = text => {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getRandomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export { addStringToRandomPosition, toTitleCase };
