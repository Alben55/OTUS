function kolobok(name) {
  switch (name) {
    case 'дедушка':
      console.log('Я от дедушки ушел');
      break;
    case 'заяц':
      console.log('Я от зайца ушел');
      break;
    case 'лиса':
      console.log('Меня съели');
      break;
  }
}

function newYear(character) {
  const allowedNames = ['Дед мороз', 'Снегурочка'];

  if (!allowedNames.includes(character)) {
    return 'Неизвестный новогодний персонаж!';
  }

  return `${character}! ${character}! ${character}!`;
}

console.log(newYear('Снегурочка'));
