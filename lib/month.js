'use strict';

//Require in the zeller formula
const { zeller } = require('./zeller');


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
