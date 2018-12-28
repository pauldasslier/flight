function departure() {

  let depData = {};
  let xhr = new XMLHttpRequest();

  function parseSheduleDep(sheduleDep) {
    depData = sheduleDep;
    console.log(depData.schedule[0]);
    // countDep();
  }

  let countDep = function() {
    for (let i = 0; i < depData.schedule.length; i++) {
      console.log(depData.schedule[i].thread.number);
    }
  }

  function DepartureSchedule(num, name, city, time, type) {
    // this.num = num.schedule[0].thread.number;
    // this.name = name.schedule[0].thread.carrier.title;
    // this.city = city.schedule[0].thread.title;
    // this.time = time.schedule[0].departure;
    // this.type = type.schedule[0].thread.vehicle;
    this.num = num;
    this.name = name;
    this.city = city;
    this.time = time;
    this.type = type;
    this.createPlane = function() {
      console.log(`${num} + ${name} + ${city} + ${time} + ${type}`);
    }

  }

  let plane = new DepartureSchedule('SU 155','Аэрофлот','Воронеж','00:05','Airbus');
  plane.createPlane();

  xhr.open('GET', 'departure.json', true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      // console.log(xhr.responseText);
      sheduleDep = JSON.parse(xhr.responseText);
      parseSheduleDep(sheduleDep);
    }
  }
  
}


module.exports = departure;