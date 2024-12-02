import { isEscapeKey } from './utils.js';
import { validateHashtags, errorHashtags } from './validate-hashtags.js';
import { validateDescription, errorDescription } from './validate-description.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');
const overlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const inputHashtags = imgUploadForm.querySelector('.text__hashtags');
const previewImg = imgUploadForm.querySelector('.img-upload__preview img');
const effectsPreviews = imgUploadForm.querySelectorAll('.effects__preview');
const inputDescription = imgUploadForm.querySelector('.text__description');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');

// Добавление валидации к форме загрузки
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

//Заполняет предварительный просмотр фото
const showPreview = (file) => {
  const reader = new FileReader();

  reader.onload = (evt) => {
    previewImg.src = evt.target.result;

    for (const effectsPreview of effectsPreviews) {
      effectsPreview.style.backgroundImage = `url(${evt.target.result})`;
    }
  };
  reader.readAsDataURL(file);
};

//открытие формы
const formImgUploadOpen = () => {
  const file = imgUploadInput.files[0];
  showPreview(file);

  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  imgUploadCancel.addEventListener('click', onCancelClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

//Закрытие формы
const formImgUploadClose = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imgUploadCancel.removeEventListener('click', onCancelClick);
  document.removeEventListener('keydown', onDocumentKeydown);

  imgUploadInput.value = '';
  inputHashtags.value = '';
  inputDescription.value = '';
  previewImg.src = '';
  pristine.reset();
  imgUploadForm.reset();
};

//закрытие формы
function onCancelClick (evt) {
  evt.preventDefault();
  formImgUploadClose();
}

//закрывает форму на ESC
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    if (document.activeElement === inputHashtags || document.activeElement === inputDescription) {
      evt.stopPrepagation();
    } else {
      formImgUploadClose();
    }
  }
}

// обработчик загрузки изображения.
imgUploadInput.addEventListener('input', () => {
  formImgUploadOpen();
});

//pristine на хэштеги
function onHashtagsInput () {
  if (pristine.validate()) {
    imgUploadSubmit.disabled = false;
  } else {
    imgUploadSubmit.disabled = true;
  }
}

//pristine на описание
function onDescriptionInput () {
  if (pristine.validate()) {
    imgUploadSubmit.disabled = false;
  } else {
    imgUploadSubmit.disabled = true;
  }
}

pristine.addValidator(inputHashtags, validateHashtags, errorHashtags, 1, false);
inputHashtags.addEventListener('input', onHashtagsInput);

pristine.addValidator(inputDescription, validateDescription, errorDescription, 2, false);
inputDescription.addEventListener('input', onDescriptionInput);
