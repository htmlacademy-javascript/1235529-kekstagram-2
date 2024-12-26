import { isEscapeKey } from './utils.js';
import { validateHashtags, getErrorHashtags } from './validate-hashtags.js';
import { validateDescription, getErrorDescription } from './validate-description.js';
import { resetEffect } from './filters.js';
import {resetZoom, changeZoom} from './zoom.js';
import { sendData } from './api.js';
import { showAlert } from './alert.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const inputHashtags = imgUploadForm.querySelector('.text__hashtags');
const previewImg = imgUploadForm.querySelector('.img-upload__preview img');
const effectsPreviews = imgUploadForm.querySelectorAll('.effects__preview');
const inputDescription = imgUploadForm.querySelector('.text__description');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const scaleControlSmaller = imgUploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUploadForm.querySelector('.scale__control--bigger');

// Добавление валидации к форме загрузки
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

//Показ превью фото
const showPreview = (file) => {
  const fileUrl = URL.createObjectURL(file);

  previewImg.src = fileUrl;

  effectsPreviews.forEach((preview) => {
    preview.style.backgroundImage = `url(${fileUrl})`;
  });
};

//открытие формы
const formImgUploadOpen = () => {
  const file = imgUploadInput.files[0];
  showPreview(file);

  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetEffect();

  imgUploadCancel.addEventListener('click', onCancelClick);
  document.addEventListener('keydown', onDocumentKeydown);
};


//Закрытие формы

const formImgUploadClose = () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imgUploadCancel.removeEventListener('click', onCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);

  pristine.reset();
  imgUploadForm.reset();
  imgUploadSubmit.disabled = false;
  resetEffect();
  resetZoom();
};


//обработчик клика на zoom
scaleControlSmaller.addEventListener('click', () => changeZoom(-1));
scaleControlBigger.addEventListener('click', () => changeZoom());

//закрытие формы
function onCancelClick (evt) {
  evt.preventDefault();
  formImgUploadClose();
}

//закрывает форму на ESC
function onDocumentKeydown (evt) {
  const currentAlert = document.querySelector('#alert-current');

  if (isEscapeKey(evt) &&
      !currentAlert &&
      document.activeElement !== inputHashtags &&
      document.activeElement !== inputDescription) {
    evt.preventDefault();
    formImgUploadClose();
  }
}

// обработчик загрузки изображения.
imgUploadInput.addEventListener('input', () => {
  formImgUploadOpen();
});

//pristine на хэштеги
function onHashtagsInput () {
  if (pristine.validate()) {
    return (imgUploadSubmit.disabled = false);
  } imgUploadSubmit.disabled = true;
}

//pristine на описание
function onDescriptionInput () {
  if (pristine.validate()) {
    return (imgUploadSubmit.disabled = false);
  } imgUploadSubmit.disabled = true;
}

pristine.addValidator(inputHashtags, validateHashtags, getErrorHashtags, 1, false);
inputHashtags.addEventListener('input', onHashtagsInput);

pristine.addValidator(inputDescription, validateDescription, getErrorDescription, 2, false);
inputDescription.addEventListener('input', onDescriptionInput);
const SUCCESS_UPLOAD_MESSAGE = 'Изображение успешно загружено';
const onFormImgUploadSubmit = (evt) => {
  evt.preventDefault();
  imgUploadSubmit.disabled = true;

  const formData = new FormData(imgUploadForm);

  sendData(formData)
    .then(() => {
      showAlert('success', SUCCESS_UPLOAD_MESSAGE);
      formImgUploadClose();
    })
    .catch((err) => {
      showAlert('error', err.message);
    })
    .finally(() => {
      imgUploadSubmit.disabled = false;
    });
};

imgUploadForm.addEventListener('submit', onFormImgUploadSubmit);
