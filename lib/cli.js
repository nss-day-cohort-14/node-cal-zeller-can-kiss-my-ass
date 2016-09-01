'use strict';

//Returns month list with total days
const { cal } = require('./cal');

const [,, ...args] = process.argv;
const { month, year } = require('./parse-args').args(args);
const { getMonthName, setMonthTitle} = require('./month')
const { centerText } = require('./formatting')
// let monthName = getMonthName(month)
// let monthTitle = setMonthTitle(monthName, year)

