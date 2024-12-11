import { isEscapeKey } from './utils.js';

const alertTemplateSuccess = document.querySelector('#success').content;

const removeAlert = () => {
  const currentAlert = document.querySelector('.success');
  if (currentAlert) {
    document.body.removeChild(currentAlert);
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeAlert();
  }
}

const showAlertSucces = () => {
  const alert = alertTemplateSuccess.cloneNode(true);

  const alertButton = alert.querySelector('.success__button');

  alertButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeAlert();
  });

  const alertSection = alert.querySelector('.success');

  alertSection.addEventListener('click', () => {
    removeAlert();
  });

  document.addEventListener('keydown', onDocumentKeydown);
  document.body.append(alert);
};

export { showAlertSucces };
