'use strict';

//Require in the zeller formula
const { zeller } = require('./zeller');
const { cal } =require('./cal')



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


module.exports.makeMonth = () => {

};//End makeMonth()

module.exports.getMonthName = (month) => {
	month = month - 1;
	return cal[month].name;
};

module.exports.setMonthTitle = (month, year) => {
	return `${month} ${year}`
}
