function schedule() {

  function departureSchedule(num, name, city, time, type) {
    this.num = num.schedule[0].thread.number;
    this.name = name.schedule[0].thread.carrier.title;
    this.city = city.schedule[0].thread.title;
    this.time = time.schedule[0].departure;
    this.type = type.schedule[0].thread.vehicle;

  }
  
}
module.exports = schedule;