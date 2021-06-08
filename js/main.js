const COUNT_PHOTO = 25;

const NAMES = [
  'Иван',
  'Петр',
  'Михаил',
  'Андрей',
  'Евгений',
  'Антон',
  'Алексей',
  'Евгений',
  'Александр',
  'Константин',
  'Сергей',
  'Никита',
  'Анатолий',
  'Владимир',
  'Вальдемар',
];

const DESCRIPTION = [
  'У себя дома в Купертино, 1982 год. Он был таким перфекционистом, что ему было трудно выбрать мебель.',
  'У себя на кухне. "Проведя семь месяцев в индийских деревнях, я осознал безумие западного человека - наравне с его способностью рационально мыслить".',
  'В Стэнфорде, 1982 год. "Сколько среди вас девственников? А кто из вас пробовал ЛСД?".',
  'С компьютером LISA. "Пикассо говорил: "Хорошие художники копируют, великие - воруют". И мы никогда не стеснялись воровать великие идеи."',
  'С Джоном Скалли, Центральный парк, 1984 год. "Вы хотите до конца своих дней продавать подслащенную водичку или все-таки решитесь попробывать изменить мир?"',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/**
 * Возвращает случайное число из положительного диапазона
 *
 * @param {number} min - начало диапазона
 * @param {number} max - конец диапазона
 * @returns {number}
 */
function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    throw 'Видены не правильные значения. Число не может быть отрицательным';
  } else if (min > max) {
    throw 'Значение "от" не может быть больше значения "до". Пожалуйста исправте.';
  } else if (min === max) {
    throw 'Мне здесь нечего высчислять!';
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Функция проверки превышения максимальной длины комментария
 *
 * @param {string} text - текст комментария
 * @param {number} maxTextLenght - максимальная длина комментария
 * @returns {boolean}
 */
function stringValidation (text, maxTextLenght) {
  return text.length > maxTextLenght;
}

/**
 * Создание случайного колличества комментариев
 *
 * @param {number} index - число для рассчета id
 * @returns {array}
 */
function getRandomCountComment(index) {
  const randomNumber = getRandomNumber(1, 10);
  const comments = [];
  while(comments.length < randomNumber) {
    comments.push({
      id: index + 100,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: MESSAGE[getRandomNumber(0, MESSAGE.length -1)],
      name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    });
  }
  return comments;
}

/**
 * Создание объекта карточки фотографии
 *
 * @param {number} index - индекс массива
 * @returns {object}
 */
function getPhoto(index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: getRandomCountComment(index),
  };
}

const similarPhoto = new Array(COUNT_PHOTO).fill(null).map((_currElement, index) => getPhoto(index));

similarPhoto;

stringValidation('Привет', 140);
