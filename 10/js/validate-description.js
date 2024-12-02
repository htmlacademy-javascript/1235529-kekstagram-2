const DESCRIPTION_SYMBOLS_MAX = 140;

let errorMessage = '';

//проверка описания
const validateDescription = (value) => {
  errorMessage = '';

  const inputText = value;

  if (!inputText) {
    return true;
  }

  const rules = [
    {
      check: inputText.length > DESCRIPTION_SYMBOLS_MAX,
      error: `Максимальная длина описания ${DESCRIPTION_SYMBOLS_MAX} символов.`
    }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};


//сообщение ошибки
const errorDescription = () => errorMessage;


export { validateDescription, errorDescription };
