let date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  sec = date.getSeconds(),
  currenTime = document.querySelector('.curren-time'),
  currenDay = document.querySelector('.curren-day'),
  date1 = document.getElementById('date1').value,
  date2 = document.getElementById('date2').value,
  rezult = document.getElementById('rezult');

//выводим текущую дату в заддном формате
currenTime.innerHTML = (`Текущее время: ${hours}:${minutes}:${sec}  ${addZero(day)}:${addZero(month)}:${year}`);

//функция добавляет 0 к числам
function addZero(num) {
  return ('0' + num).slice(-2); // обрезает 2 ненужных символа
}

//функция текущий день недели
function getCurrenDay() {
  let dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    day = date.getDay() - 1,
    curentDay;
  curentDay = dayOfWeek[day];
  currenDay.innerHTML = (`Сегодня: ` + curentDay);
};

getCurrenDay();

//Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
/* Алгоритм
1. Забрать данные из инпута - но в требуем формате нужна валидация нормальная
2. Берем из данных даты
3. Берем числа и вычитаем
*/
function getDateDifference() {
  let d1 = new Date(date1),
      d2 = new Date(date2),
      r = (d1.getDate()) - (d2.getDate());
  rezult.value = r;
}

getDateDifference();
