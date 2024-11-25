const commentTemplate = document.querySelector('.social__comment');

//Создаем шаблон комментария
const getComment = (commentData) => {
  const comment = commentTemplate.cloneNode(true);
  const commentImg = comment.querySelector('img');
  const commentMessage = comment.querySelector('p');

  commentImg.src = commentData.avatar;
  commentImg.alt = commentData.name;
  commentMessage.textContent = commentData.message;

  return comment;
};

export { getComment };
