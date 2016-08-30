'use strict';

//Returns month list with total days
const { cal } = require('./cal');
//returns current month, year
const { currentMonth, currentYear } = require('./current');


console.log("Test cal", cal[currentMonth()]);
console.log("Test cal[currentYear()]", currentYear());
