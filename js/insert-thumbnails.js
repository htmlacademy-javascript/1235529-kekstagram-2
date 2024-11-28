import {similarDescriptionPhoto} from './create-pictures-description.js';
import {createThumbnail} from './rendering-pictures.js';

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

similarDescriptionPhoto.forEach((photo) => {
  fragment.append(createThumbnail(photo));
  pictures.append(fragment);
});

export {similarDescriptionPhoto};
