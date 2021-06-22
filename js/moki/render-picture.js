
const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPictures = (elements) => {
  const fragmentPictures = document.createDocumentFragment();
  elements.forEach((element) => {
    const pictureClone = picture.cloneNode(true);
    pictureClone.querySelector('.picture__img').src = element.url;
    pictureClone.querySelector('.picture__likes').textContent = element.likes;
    pictureClone.querySelector('.picture__comments').textContent = element.comments.length;
    fragmentPictures.appendChild(pictureClone);
  });
  pictures.appendChild(fragmentPictures);
};

export {renderPictures};
