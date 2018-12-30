function switcher() {
  const arrBtn = document.getElementById('switch-arr');
  const depBtn = document.getElementById('switch-dep');

  depBtn.addEventListener('change', () => {
    let table = document.querySelector('.schedule__table');
    let tableRow = table.getElementsByTagName('tr');

    for (let i = 1; i < tableRow.length; i++) {
      let cityCeil = tableRow[i].children[2].textContent;
      if (cityCeil.indexOf('Москва')) {
        tableRow[i].style.display = 'none';
      }
      if (!(cityCeil.indexOf('Москва'))) {
        tableRow[i].style.display = 'table-row';
      }
    }
  });

  arrBtn.addEventListener('change', () => {
    let table = document.querySelector('.schedule__table');
    let tableRow = table.getElementsByTagName('tr');

    for (let i = 1; i < tableRow.length; i++) {
      let cityCeil = tableRow[i].children[2].textContent;
      if (!(cityCeil.indexOf('Москва'))) {
        tableRow[i].style.display = 'none';
      }
      if (cityCeil.indexOf('Москва')) {
        tableRow[i].style.display = 'table-row';
      }
    }
  });
}

module.exports = switcher;