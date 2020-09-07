const randomNum = (max, min) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

export const arrayCharacter = (numCards) => {
  const myArray = [];
  for (let index = 0; index < numCards; index++) {
    myArray.push(randomNum(591, 1));
  }

  return myArray;
};

export const key = (array) => {
  const keys = [];
  for (let index = 1; index < array.length + 1; index++) {
    keys.push(index);
  }
  return keys;
};

export const order = (array, numCards) => {
  const origin = array;
  const newArray = array.concat([]);
  for (let index = 0; index < array.length; index++) {
    const element = origin[index];
    newArray.splice(randomNum(numCards, 0), 0, element);
  }
  return newArray;
};
