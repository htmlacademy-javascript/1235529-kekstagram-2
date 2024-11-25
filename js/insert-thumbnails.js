import {similarDescriptionPhoto} from './create-photo-description';
import {createThumbnail} from './rendering-pictures';

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

similarDescriptionPhoto.forEach((photo) => {
  fragment.append(createThumbnail(photo));
  pictures.append(fragment);
});

export {similarDescriptionPhoto};
