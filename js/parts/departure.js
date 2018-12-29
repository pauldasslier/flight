function departure() {


  let depData = {};
  let xhr = new XMLHttpRequest();

  function parseSheduleDep(sheduleDep) {
    depData = sheduleDep;

    let planes = require('./schedule.js');

    planes(depData);
  }

  xhr.open('GET', 'departure.json', true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      sheduleDep = JSON.parse(xhr.responseText);
      parseSheduleDep(sheduleDep);
    }
  }
  
}

module.exports = departure;