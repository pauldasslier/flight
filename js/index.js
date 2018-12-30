'use strict'
window.addEventListener('DOMContentLoaded', () => {
  const arrival = require('./parts/arrivals.js');
  const departure = require('./parts/departure.js');
  const schedule = require('./parts/schedule.js');
  const switcher = require('./parts/switcher.js');
  const createTable = require('./parts/createTable.js');
  const search = require('./parts/search.js');

  createTable();
  switcher();
  arrival();
  departure();
  schedule();
  search();
  
})