import {createThumbnail} from './rendering-pictures.js';
import {getData} from './api.js';
import {showPopup} from './popup-error.js';

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const insertThumbnails = (pictures) => {
  pictures.forEach((photo) => {
    fragment.append(createThumbnail(photo));
    picturesContainer.append(fragment);
  });
};

getData()
  .then((pictures)=> insertThumbnails(pictures))
  .catch((err) => showPopup(err.message));
