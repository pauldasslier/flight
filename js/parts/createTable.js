function createTable() {

  function insertTable() {

    let scheduleDiv = document.querySelector('.schedule');
    let scheduleDivCol = scheduleDiv.querySelector('.col');
    let table = document.createElement('table');
    let tableRow = document.createElement('tr');
  
    table.classList.add('schedule__table');
    tableRow.classList.add('schedule__row');
    scheduleDivCol.appendChild(table);
    table.appendChild(tableRow);
    tableRow.insertAdjacentHTML('beforeend', '<td></td><td></td><td></td><td></td><td></td><td></td>');

    tableRow.children[0].textContent = '№ Рейса';
    tableRow.children[1].textContent = 'Авиакомпания';
    tableRow.children[2].textContent = 'Город';
    tableRow.children[3].textContent = 'Время';
    tableRow.children[4].textContent = 'Самолет';
    tableRow.children[5].textContent = 'Статус';
  }
  module.exports = insertTable;
}

module.exports = createTable;