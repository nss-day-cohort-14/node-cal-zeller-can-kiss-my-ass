'use strict';

//returns current month, year
const { currentMonth, currentYear } = require('./current');


module.exports.args = (args) => {

  let month, year;

  switch (args.length) {
    case 1:
      month = 0;
      year = Number(args[0]);
      break;
    case 2:
      month = Number(args[0]);
      year = Number(args[1]);
      break;
    default:
      month = currentMonth() + 1;
      year = currentYear();

    };
    return { month, year }

};//end function
