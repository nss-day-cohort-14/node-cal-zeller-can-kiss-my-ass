'use strict';


//* returns 0-6 where 0=sunday, 1=monday, etc....*/
module.exports.zeller = (month, year) => {

  let day = 1;
  //Add one to the month to get the current month of the day

  if (month < 3) {
    month += 12;
    year -= 1;
  }

  let h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;

  return h;

};
