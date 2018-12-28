function arrival() {
  let xhr = new XMLHttpRequest();

  function parseSheduleArr(sheduleArr) {
    console.log(sheduleArr);
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