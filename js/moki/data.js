import {NAMES, DESCRIPTIONS, MESSAGES} from './vars.js';
import {getRandomNumber, getRandomCountComment} from './util.js';

/**
 * Создание объекта карточки фотографии
 *
 * @param {number} index - индекс массива
 * @returns {object}
 */
const generatePhoto = (index) => (
  {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: getRandomCountComment(index, NAMES, MESSAGES),
  }
);

const generatePhotos = (count) => new Array(count).fill(null).map((_currentValue, index) => generatePhoto(index));

export {generatePhotos};
