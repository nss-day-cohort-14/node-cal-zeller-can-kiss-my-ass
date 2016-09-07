'use strict';

//Returns month list with total days
const { cal } = require('./cal');

const [,, ...args] = process.argv;
const { month, year } = require('./parse-args').args(args);

const { makeMonth } = require('../lib/month');
const { makeYear } = require('../lib/year');
const { displayMonth } = require('../lib/monthDisplay');
const { finalResultString } = require('../lib/formatting');

let result = [];

if (month === 0) {
	result = makeYear(year);

} else {
	let monthArray = makeMonth(month, year);
	result = displayMonth(month, year, monthArray);
}


console.log(finalResultString(result));

