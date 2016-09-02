'use strict';
let monthWidth = 20

module.exports.centerText = (text) => {
	//Give a number back
 let padLeft = Math.floor((monthWidth - text.length) / 2)
 let padRight = monthWidth - padLeft - text.length
 let centeredText = "";
 for(let i = 0; i < padLeft; i++) {
 	centeredText += " "
 }
 centeredText += text;
 for(let i = 0; i < padRight; i++) {
 	centeredText += " "
 }
 return centeredText;
}

module.exports.weekDaysString = (days) => {
	let displayDayNames = "";
	for (let i = 0; i < days.length-1; i++) {
		displayDayNames += `${days[i]} `
	}
	displayDayNames += days[6]
	return displayDayNames
}

module.exports.addLeftPad = (num) => {
	let spacesString = "";
	for (let i = 0; i < num; i++) {
		spacesString += " ";
	}
	return spacesString;
}

module.exports.truncateSpaces = (string) => {
	let lastLetterIndex = null;
	for ( let i = string.length -1; i > -1; i--) {
		if (string.charAt(i) !== " ") {
			lastLetterIndex = i;
			break;
		}
	}

	let truncatedString = lastLetterIndex === 0 ? null : string.slice(0, lastLetterIndex + 1);

	return truncatedString;

}


module.exports.displayFinalResult = (array) => {
	array.forEach((line) => {
		console.log(line);
	})
}
