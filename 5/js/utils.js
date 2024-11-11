// возвращает рандомное число в диапазоне от a до b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// возвращает рандомный элемент переданного массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//возвращает id по порядку с 1
function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

export {getRandomInteger};
export {getRandomArrayElement};
export {createIdGenerator};
