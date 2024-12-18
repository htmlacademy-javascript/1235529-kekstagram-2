const DELAY_TIME = 5000;

const popupErroreTemplate = document.querySelector('#data-error').content;

const showPopup = (message) => {
  const popupError = popupErroreTemplate.cloneNode(true);

  const popupTitle = popupError.querySelector('.data-error__title');
  popupTitle.textContent = message;

  document.body.append(popupError);

  setTimeout(removePopup, DELAY_TIME);
};

function removePopup(){
  document.querySelector('.data-error').remove();
}

export { showPopup };
