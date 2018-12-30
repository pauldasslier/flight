function search() {
  let searchInput = document.getElementById('search');

  searchInput.addEventListener('keydown', () => {
    if(event.keyCode == 13){
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
      let numReplace = numValue.replace(/\s/g, '');
      if (inputValue && inputValue == numSubstr && inputValue == numReplace.substr(0, inputLength)) {
        tableRow[i].style.display = 'table-row';
        // console.log(numReplace.substr(0, inputLength));
      }
      if (!(inputValue == numSubstr || inputValue == numReplace.substr(0, inputLength) && true)) {
        tableRow[i].style.display = 'none';
      }
      // else if (inputValue.replace(/\s/g, '') == numValue.replace(/\s/g, '')) {
      //   console.log(numValue);
      // }
      // else if (inputValue == numSubstr.replace(/\s/g, '')) {
      //   console.log(numValue);
      // }
    }
    // for (let i = 1; i < tableRow.length; i++) {
    //   let numValue = tableRow[i].children[0].textContent.toLowerCase();
    //   if (inputValue == numValue || inputValue == numValue.replace(/\s/g, '')) {
    //     tableRow[i].style.display = 'table-row';
    //   }
    //   if (!(inputValue == numValue || inputValue == numValue.replace(/\s/g, ''))) {
    //     tableRow[i].style.display = 'none';
    //   }
    // }
  });

}

module.exports = search;