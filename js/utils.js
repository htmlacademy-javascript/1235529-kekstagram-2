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
const shuffleArray = (data) => {
  data.sort(() => 0.5 - Math.random());
  return data;
};

export {isEscapeKey, debounce, shuffleArray};
