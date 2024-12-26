import {openPhoto} from './open-big-pictures.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const onThumbnailClick = (evt, photo) => {
  evt.preventDefault();
  openPhoto(photo);
};

const createThumbnail = (photos) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const thumbnailLikes = thumbnail.querySelector('.picture__likes');
  thumbnailLikes.textContent = photos.likes;

  const thumbnailImg = thumbnail.querySelector('.picture__img');
  thumbnailImg.src = photos.url;
  thumbnailImg.alt = photos.description;

  const thumbnailComments = thumbnail.querySelector('.picture__comments');
  thumbnailComments.textContent = photos.comments.length;

  thumbnail.addEventListener('click', (evt) => {
    onThumbnailClick(evt, photos);
  });

  return thumbnail;
};

export {createThumbnail};
