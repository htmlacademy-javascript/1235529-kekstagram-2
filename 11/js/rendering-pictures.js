import {openPhoto} from './open-big-pictures.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const onThumbnailClick = (evt, photo) => {
  evt.preventDefault();
  openPhoto(photo);
};

const createThumbnail = (photo) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const thumbnailLikes = thumbnail.querySelector('.picture__likes');
  thumbnailLikes.textContent = photo.likes;

  const thumbnailImg = thumbnail.querySelector('.picture__img');
  thumbnailImg.src = photo.url;
  thumbnailImg.alt = photo.description;

  const thumbnailComments = thumbnail.querySelector('.picture__comments');
  thumbnailComments.textContent = photo.comments.length;

  thumbnail.addEventListener('click', (evt) => {
    onThumbnailClick(evt, photo);
  });

  return thumbnail;
};

export {createThumbnail};
