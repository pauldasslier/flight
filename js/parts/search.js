function search() {
  let searchInput = document.getElementById('search');

  searchInput.addEventListener('keydown', () => {
    // Отменяем нажатие клавиши enter
    if(event.keyCode == 13) {
      event.preventDefault();
    }
    console.log(searchInput.keyCode)
  })

  searchInput.addEventListener('input', () => {
    
    let table = document.querySelector('.schedule__table');
    let tableRow = table.getElementsByTagName('tr');
    let inputValue = searchInput.value.toLowerCase();
    let inputLength = searchInput.value.length;
    
    for (let i = 0; i < tableRow.length; i++) {

      let numValue = tableRow[i].children[0].textContent.toLowerCase();
      let numSubstr = numValue.substr(0, inputLength);

      // Дополнительная переменная на случай ввода номера рейса без пробела
      let numReplace = numValue.replace(/\s/g, '');

      if (inputValue && inputValue == numSubstr && inputValue == numReplace.substr(0, inputLength)) {
        tableRow[i].style.display = 'table-row';
      }
      if (!(inputValue == numSubstr || inputValue == numReplace.substr(0, inputLength))) {
        tableRow[i].style.display = 'none';
      }
    }
  });

}

module.exports = search;