const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 250;
const QUANTITY_ARRAYS = 25;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const DESCRIPTION = [
  'Фото гор',
  'Фото животного',
  'Фото леса',
  'Фото дома'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateCommentsId = createIdGenerator();
const generatePhotoId = createIdGenerator();
const generateUrlId = createIdGenerator();

const createComments = () => {
  const randomAvatar = getRandomInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR);

  return {
    id: (generateCommentsId()),
    avatar: `img/avatar-${ randomAvatar }.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  };
};

const createDescriptionPhoto = () =>{
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  return {
    id: (generatePhotoId()),
    url: `photos/ ${ generateUrlId() }.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikes,
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComments)
  };
};

const similarDescriptionPhoto = Array.from ({length: QUANTITY_ARRAYS}, createDescriptionPhoto);

similarDescriptionPhoto();
