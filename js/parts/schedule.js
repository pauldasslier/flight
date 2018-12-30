function schedule() {

  // Импортируем функцию формирования table
  let insertTable = require('./createTable.js');

  // Инициируем функцию создания table
  insertTable();

  function planes(data) {
    let table = document.querySelector('.schedule__table');
    let tableRow = document.querySelector('.schedule__row');

    for (let i = 0; i < data.schedule.length; i++) {
      // Создаем клон тега tr и наполняем данными
      let cloneRow = tableRow.cloneNode(true);
      tableRow.children[0].textContent = data.schedule[i].thread.number;
      tableRow.children[1].textContent = data.schedule[i].thread.carrier.title
      tableRow.children[2].textContent = data.schedule[i].thread.title;
      tableRow.children[4].textContent = data.schedule[i].thread.vehicle;

      // Определяем тип события
      if (data.event == 'departure') {
        tableRow.children[3].textContent = data.schedule[i].departure;
      } else if (data.event == 'arrival') {
        tableRow.children[3].textContent = data.schedule[i].arrival;
      }

      random();
      table.insertBefore(cloneRow, tableRow);
    }

    // Создаем функцию random для вывода статуса рейса
    function random() {
      let num = Math.random();
      num = num.toFixed(1);

      if (data.event == 'departure') {
        if (num < 0.2) {
          tableRow.children[5].textContent = 'Ожидается';
        } else if (num > 0.8) {
          tableRow.children[5].textContent = 'Задержан';
        } else if (num == 0.5) {
          tableRow.children[5].textContent = 'Идет посадка';
        } else {
          tableRow.children[5].textContent = 'Вылетел';
        }
      } else {
        if (num < 0.2) {
          tableRow.children[5].textContent = 'Ожидается';
        } else if (num > 0.8) {
          tableRow.children[5].textContent = 'Задержан';
        } else {
          tableRow.children[5].textContent = 'Прибыл';
        }
      }
    }

  }
  module.exports = planes;
}

module.exports = schedule;