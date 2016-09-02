'use strict';

const { getMonthName, setMonthTitle } = require('./month');
const { truncateSpaces, centerText, weekDaysString } = require('./formatting');
const { dayNames } = require('./cal');

module.exports.displayMonth = (month, year, monthArray) => {
	let monthDisplayArray = []

	let title = setMonthTitle(getMonthName(month), year);
	title = centerText(title);
	monthDisplayArray.push(truncateSpaces(title));

	let weekDays = weekDaysString(dayNames);
	monthDisplayArray.push(weekDays);

	monthArray.forEach((week) => {
		let fixedWeek = truncateSpaces(week);
		if (fixedWeek === " ") {
			monthDisplayArray.push(????????)
		} else {
			monthDisplayArray.push(fixedWeek)
		}
	});

	return monthDisplayArray;

}
