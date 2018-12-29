function schedule() {

  function planes(data) {
    const table = document.querySelector('tbody');
    let tableRow = table.querySelector('.schedule__row');

    for (let i = 0; i < data.schedule.length; i++) {
      let cloneRow = tableRow.cloneNode(true);
      tableRow.children[0].textContent = data.schedule[i].thread.number;
      tableRow.children[1].textContent = data.schedule[i].thread.carrier.title
      tableRow.children[2].textContent = data.schedule[i].thread.title;
      tableRow.children[4].textContent = data.schedule[i].thread.vehicle;

      if (data.event == 'departure') {
        tableRow.children[3].textContent = data.schedule[i].departure;
      } else if (data.event == 'arrival') {
        tableRow.children[3].textContent = data.schedule[i].arrival;
      }

      random();
      table.appendChild(cloneRow);
    }

    function random() {
      let num = Math.random();
      num = num.toFixed(1);
      console.log(num);

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