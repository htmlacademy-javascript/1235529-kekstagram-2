import {isEscapeKey} from './utils.js';
import { insertComments, showMoreComments, cleanComments } from './create-comments.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoCancel = bigPhoto.querySelector('.big-picture__cancel');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const bodyList = document.querySelector('body');

const onPhotoCloseClick = (evt) => {
  evt.preventDefault();
  closePhoto();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const onCommentsLoaderClick = (evt) => {
  evt.preventDefault();
  showMoreComments();
};


const openPhoto = (photo) =>{
  bigPhoto.classList.remove('hidden');
  bodyList.classList.add('modal-open');

  bigPhotoImg.src = photo.url;
  bigPhotoImg.alt = photo.description;
  bigPhotoDescription.textContent = photo.description;
  bigPhotoLikes.textContent = photo.likes;

  insertComments(photo);

  //добавляем обработчик события на крестик и на эскейп
  bigPhotoCancel.addEventListener('click', onPhotoCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

function closePhoto() {
  bodyList.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');

  bigPhotoImg.src = '';
  bigPhotoImg.alt = '';
  bigPhotoDescription.textContent = '';
  bigPhotoLikes.textContent = '';

  cleanComments();

  //удаляем обработчики после закрытия фотографии
  bigPhotoCancel.removeEventListener('click', onPhotoCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onDocumentKeydown);
}

export {openPhoto};
