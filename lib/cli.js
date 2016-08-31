'use strict';

//Returns month list with total days
const { cal } = require('./cal');

const [,, ...args] = process.argv;
const { month, year } = require('./parse-args').args(args);

//Require in the zeller formula
const { zeller } = require('./zeller');

console.log(zeller(month, year));
