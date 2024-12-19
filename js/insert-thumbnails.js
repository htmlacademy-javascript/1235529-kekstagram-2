import {createThumbnail} from './rendering-pictures.js';
import {getData} from './api.js';
import {showPopup} from './popup-error.js';
import {openFilter} from './photo-filter.js';

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const clearThumbnails = () => {
  const allPictures = picturesContainer.querySelectorAll('.picture');
  allPictures.forEach((picture) => picture.remove());
};


const insertThumbnails = (pictures) => {
  clearThumbnails();
  pictures.forEach((photo) => {
    fragment.append(createThumbnail(photo));
    picturesContainer.append(fragment);
  });
};

getData()
  .then((pictures)=> {
    insertThumbnails(pictures);
    openFilter(pictures);
  })
  .catch((err) => showPopup(err.message));


export {insertThumbnails};
