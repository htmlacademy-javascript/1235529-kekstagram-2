import { getComment } from './get-comments.js';


const socialComments = document.querySelector('.social__comments');
const socialCommentsFragment = document.createDocumentFragment();

//Вставляем комментарий из созданого шаблона
const insertComments = (photoData) => {
  //Удаляем комментарии в разметке
  while (socialComments.firstChild) {
    socialComments.removeChild(socialComments.firstChild);
  }

  photoData.comments.forEach((commentData) => {
    socialCommentsFragment.append(getComment(commentData));
  });

  socialComments.append(socialCommentsFragment);
};

export { insertComments };
