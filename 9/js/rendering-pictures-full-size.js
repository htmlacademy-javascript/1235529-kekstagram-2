import {isEscapeKey} from './utils';
import { insertComments } from './insert-comment.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoComments = bigPhoto.querySelector('.social__comment-shown-count');
const bigPhotoCommentsAll = bigPhoto.querySelector('.social__comment-total-count');
const bigPhotoDescription = bigPhoto.querySelector('.social__caption');
const bigPhotoCancel = bigPhoto.querySelector('.big-picture__cancel');
const bodyList = document.querySelector('body');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const socialCommentCount = bigPhoto.querySelector('.social__comment-count');

//Убираем возможность загрузки допоплнительных комментариев
commentsLoader.classList.add('hidden');
//Убираем подпись с количеством комментариев
socialCommentCount.classList.add('hidden');

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

const openPhoto = (photo) =>{
  bigPhoto.classList.remove('hidden');
  bodyList.classList.add('modal-open');

  bigPhotoImg.src = photo.url;
  bigPhotoImg.alt = photo.description;
  bigPhotoDescription.textContent = photo.description;
  bigPhotoLikes.textContent = photo.likes;
  bigPhotoComments.textContent = photo.comments.length;
  bigPhotoCommentsAll.textContent = photo.comments.length;

  insertComments(photo);
  //добавляем обработчик события на крестик и на эскейп
  bigPhotoCancel.addEventListener('click', onPhotoCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePhoto = () =>{
  bodyList.classList.remove('modal-open');
  bigPhoto.classList.add('hidden');

  bigPhotoImg.src = '';
  bigPhotoImg.alt = '';
  bigPhotoDescription.textContent = '';
  bigPhotoLikes.textContent = '';
  bigPhotoComments.textContent = '';
  bigPhotoCommentsAll.textContent = '';

  //удаляем обработчики после закрытия фотографии
  bigPhotoCancel.removeEventListener('click', onPhotoCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};


export {openPhoto};
