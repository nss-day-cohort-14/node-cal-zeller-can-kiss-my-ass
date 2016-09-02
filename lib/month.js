'use strict';

//Require in the zeller formula
const { zeller } = require('./zeller');
const { cal } =require('./cal');
const { addLeftPad } = require('./formatting');

let getMonthLength = (monthNum) => {
  monthNum = monthNum - 1;
  return cal[monthNum].days;
}


module.exports.getWeeks = (starts, days) => {

  if (starts === 0 && days === 28) {
      return 4
  }    else if (starts === 5 && days === 31) {
      return 6
  } else if (starts === 6 && days >= 30) {
      return 6
  } else {
      return 5
  }

};


module.exports.makeMonth = (monthNum, year) => {
  //run zeller
  let zellerNum = zeller(monthNum, year);
  let firstWeekString = '';
  let firstWeekDays = 7 - zellerNum;
  let counter = 1;
  let monthLength = getMonthLength(monthNum);
  let separator = " ";
  let monthArray =[];
  let nextString ="";

  // making the first week string
  firstWeekString += addLeftPad(zellerNum * 3);
  for (let i = 0; i < firstWeekDays; i++) {
    firstWeekString += ` ${counter}${separator}`;
    counter ++;
  }
  monthArray.push(firstWeekString.slice(0,20));

  //next 5 weeks
  for (let i = 0; i < 5; i++) {
    for ( let j = 0; j < 7; j++) {
        if (counter < 10) {
          nextString += ` ${counter}${separator}`;
          counter ++;
        } else if (counter > monthLength) {
          nextString += `  ${separator}`
          counter ++;
        } else {
          nextString += `${counter}${separator}`
          counter ++;
        }
    }
    monthArray.push(nextString.slice(0, 20));
    nextString = "";
  }

  return monthArray;

};//End makeMonth()

module.exports.getMonthName = (month) => {
  month = month - 1;
  return cal[month].name;
};

module.exports.setMonthTitle = (month, year) => {
  return `${month} ${year}`
}


module.exports.checkLeapYear = (year) => {
  //logic here
  return true;
}

