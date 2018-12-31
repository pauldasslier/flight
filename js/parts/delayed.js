function getDelayed() {
  let delBtn = document.getElementById('status-check');

  delBtn.addEventListener('change', () => {

    let table = document.querySelector('.schedule__table');
    let tableRow = table.getElementsByTagName('tr');

    console.log(table);
    console.log(tableRow);
    
    for (let i = 1; i < tableRow.length; i++) {
      let delStatus = tableRow[i].children[5].textContent;
      console.log(delStatus);
      if (!(delStatus == 'Задержан')) {
        tableRow[i].classList.toggle('hide');
      }
    }
  });
}

module.exports = getDelayed;