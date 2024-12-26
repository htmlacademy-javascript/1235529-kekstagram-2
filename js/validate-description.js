const DESCRIPTION_SYMBOLS_MAX = 140;
const errorMessage = `Максимальная длина описания ${DESCRIPTION_SYMBOLS_MAX} символов.`;

//проверка описания
const validateDescription = (value) => value.length <= DESCRIPTION_SYMBOLS_MAX;

//сообщение ошибки
const getErrorDescription = () => errorMessage;

export { validateDescription, getErrorDescription };
