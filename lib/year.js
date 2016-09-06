'use strict';

let { makeMonth, getMonthName } = require('./month.js');
let { truncateSpaces, centerText, centerYearText, weekDaysString } = require('./formatting.js');
const { dayNames } = require('./cal');

let separator = "  ";

let makeDaysRow = () => {
	let dayNamesRow = '';
	for ( let i = 0; i < 2; i++) {
		dayNamesRow += weekDaysString(dayNames) + separator;
	}

	dayNamesRow += weekDaysString(dayNames);
	// console.log(dayNamesRow);
	return dayNamesRow;
}


let makeTitleRow = (leftMonthNum) => {
	let titleRow = '';
	titleRow += centerText(getMonthName(leftMonthNum)) + separator;
	titleRow += centerText(getMonthName(leftMonthNum + 1)) + separator;
	titleRow += truncateSpaces(centerText(getMonthName(leftMonthNum + 2)));
	// titleRow += '\n';
	// console.log(titleRow);
	return titleRow;
}


let makeYear = (year) => {
	let monthCounter = 1,
			leftMonthWeeks = [],
			centerMonthWeeks = [],
			rightMonthWeeks = [],
			finalYearArray = [];

	// console.log("test:", centerYearText(year));
	finalYearArray.push(centerYearText(year));
	finalYearArray.push('\0');

	for (let i = 0; i < 4; i++) { //4 rows of 3 months
		finalYearArray.push(makeTitleRow(monthCounter));
		finalYearArray.push(makeDaysRow());

		leftMonthWeeks = makeMonth(monthCounter, year);
		centerMonthWeeks = makeMonth(monthCounter + 1, year);
		rightMonthWeeks = makeMonth(monthCounter + 2, year);

		for (let j = 0; j < 6; j++) {//6 weeks per month
			let weekRow = leftMonthWeeks[j] + separator + centerMonthWeeks[j] + separator + truncateSpaces(rightMonthWeeks[j])
			finalYearArray.push(weekRow);
		}
		monthCounter = monthCounter + 3;
	}
	return finalYearArray;
}

module.exports = { makeYear };
