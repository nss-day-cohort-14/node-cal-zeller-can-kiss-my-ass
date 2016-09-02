'use strict';

//Returns month list with total days
const { cal } = require('./cal');

const [,, ...args] = process.argv;
const { month, year } = require('./parse-args').args(args);

const { makeMonth } = require('../lib/month');
const { displayMonth } = require('../lib/monthDisplay');
const { displayFinalResult } = require('../lib/formatting');

let result = [];

if (month === 0) {
	// let yearOutput = makeYear(year);
	// result = displayYear(yearOutput);
	//
} else {
	let monthArray = makeMonth(month, year);
	result = displayMonth(month, year, monthArray);
}


displayFinalResult (result);

