'use strict'
window.addEventListener('DOMContentLoaded', () => {
  const arrival = require('./parts/arrivals.js');
  const departure = require('./parts/departure.js');
  const schedule = require('./parts/schedule.js');

  arrival();
  departure();
  schedule();
})