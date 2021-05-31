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

getRandomNumber(0, 60);

function stringValidation (text, maxTextLenght) {
  return text.length > maxTextLenght;
}

stringValidation('Привет', 140);
