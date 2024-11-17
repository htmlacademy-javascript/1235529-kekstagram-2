import {similarDescriptionPhoto} from './create-photo-description';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  const thumbnailLikes = thumbnail.querySelector('.picture__likes');
  thumbnailLikes.textContent = photo.likes;

  const thumbnailImg = thumbnail.querySelector('.picture__img');
  thumbnailImg.src = photo.url;
  thumbnailImg.alt = photo.description;

  const thumbnailComments = thumbnail.querySelector('.picture__comments');
  thumbnailComments.textContent = photo.comments.length;

  return thumbnail;
};

const fragment = document.createDocumentFragment();

similarDescriptionPhoto.forEach((photo) => {
  fragment.append(createThumbnail(photo));
});

pictures.append(fragment);


