import { insertThumbnails } from './insert-thumbnails';
import { debounce, shuffleArray } from './utils';

const RANDOM_PICTURES_COUNT = 10;
let picturesFromServer = [];

const imgFilters = document.querySelector('.img-filters');
const imgFilterButtons = imgFilters.querySelectorAll('.img-filters__button');

const Filters = {
  default: (pictures) => pictures,
  random: (pictures) => shuffleArray(pictures).slice(0, RANDOM_PICTURES_COUNT),
  discussed: (pictures) => pictures.sort((A, B) => B.comments.length - A.comments.length)
};

const openFilter = (pictures) => {
  picturesFromServer = pictures;
  if (pictures) {
    imgFilters.classList.remove('img-filters--inactive');
  }
};

const setCurrentFilterButton = (currentFilterButton) => {
  imgFilterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
  currentFilterButton.classList.add('img-filters__button--active');
};

const filtersClick = (cb) => {
  imgFilters.addEventListener('click', (evt) => {
    if (evt.target.type === 'button') {
      const currentFilter = evt.target.id.replace('filter-', '');

      setCurrentFilterButton(evt.target);

      cb(currentFilter);
    }
  });
};

const filterPictures = (filter, pictures) => {
  let filteredPictures = pictures.slice();
  filteredPictures = Filters[filter](filteredPictures);

  insertThumbnails(filteredPictures);
};

filtersClick(
  debounce((currentFilter) => filterPictures(currentFilter, picturesFromServer))
);

export { openFilter };
