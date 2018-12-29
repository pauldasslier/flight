function arrival() {
  let xhr = new XMLHttpRequest();

  function parseSheduleArr(sheduleDep) {
    arrData = sheduleArr;

    let planes = require('./schedule.js');

    planes(arrData);
  }

  xhr.open('GET', 'arrival.json', true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      sheduleArr = JSON.parse(xhr.responseText);
      parseSheduleArr(sheduleArr);
    }
  }

}

module.exports = arrival;