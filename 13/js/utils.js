//Проверка на escape
const isEscapeKey = (evt) => evt.key === 'Escape';

//Устранение дребезга
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

//Перемешивает массив
const shuffleArray = (array) => {
  array.sort(() => 0.5 - Math.random());
  return array;
};

export {isEscapeKey, debounce, shuffleArray};
