
/**
 * Возвращает случайное число из положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @returns {number}
 */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    throw 'Видены не правильные значения. Число не может быть отрицательным';
  } else if (min > max) {
    throw 'Значение "от" не может быть больше значения "до". Пожалуйста исправте.';
  } else if (min === max) {
    throw 'Мне здесь нечего высчислять!';
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Функция проверки превышения максимальной длины комментария
 *
 * @param {string} text - текст комментария
 * @param {number} maxTextLenght - максимальная длина комментария
 * @returns {boolean}
 */
const stringValidation = (text, maxTextLenght) => text.length > maxTextLenght;

/**
 * Создание случайного колличества комментариев
 *
 * @param {number} index - число для рассчета id
 * @returns {array}
 */
const getRandomCountComment = (index, name, message) => {
  const randomNumber = getRandomNumber(1, 10);
  const comments = [];
  while(comments.length < randomNumber) {
    comments.push({
      id: index + 100,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: message[getRandomNumber(0, message.length -1)],
      name: name[getRandomNumber(0, name.length - 1)],
    });
  }
  return comments;
};

export {getRandomNumber, stringValidation, getRandomCountComment};
