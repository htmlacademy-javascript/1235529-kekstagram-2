import { getComment } from './get-comments.js';

const COMMENTS_SHOW_STEP = 5;
let commentsLimitCurrent = COMMENTS_SHOW_STEP;
let comments = [];

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoComments = bigPhoto.querySelector('.social__comment-shown-count');
const bigPhotoCommentsAll = bigPhoto.querySelector('.social__comment-total-count');
const bigPhotoSocialComments = bigPhoto.querySelector('.social__comments');
const commentsLoader = bigPhoto.querySelector('.comments-loader');

const showMoreComments = () => {
  const commentsToDisplay = comments.slice(commentsLimitCurrent - COMMENTS_SHOW_STEP, commentsLimitCurrent);

  commentsToDisplay.forEach((commentData) => {
    bigPhotoSocialComments.append(getComment(commentData));
  });

  commentsLimitCurrent += COMMENTS_SHOW_STEP;

  const CommentShownCount = bigPhotoSocialComments.children.length;
  bigPhotoComments.textContent = CommentShownCount;

  if (CommentShownCount === comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const insertComments = (photo) => {
  comments = photo.comments;

  bigPhotoCommentsAll.textContent = photo.comments.length;
  showMoreComments();
};

const cleanComments = () => {
  commentsLimitCurrent = COMMENTS_SHOW_STEP;
  comments = [];
  while (bigPhotoSocialComments.firstChild) {
    bigPhotoSocialComments.removeChild(bigPhotoSocialComments.firstChild);
  }
  bigPhotoCommentsAll.textContent = '';
  bigPhotoComments.textContent = '';
  commentsLoader.classList.remove('hidden');
};

export {
  showMoreComments,
  insertComments,
  cleanComments
};
