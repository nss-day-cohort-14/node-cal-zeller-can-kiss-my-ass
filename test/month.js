'use strict';

const { isFunction, strictEqual, oneOf, deepEqual } = require('chai').assert;
const { getWeeks, makeMonth, getMonthName, setMonthTitle, getMonthLength, checkLeapYear } = require('../lib/month');
const { zeller } = require('../lib/zeller');
const { cal } = require('../lib/cal');


describe('month module', () => {

  describe('getWeeks', () => {
    it('should be a function', () => {
        isFunction(getWeeks);
    });
    it('should return 4 weeks', () => {
        let starts = 0, days = 28;
        strictEqual(getWeeks(starts, days), 4);
    });
    it('should return 5 weeks', () => {
        let starts = 1, days = 31;
        strictEqual(getWeeks(starts, days), 5);
    });
    it('should return 6 weeks', () => {
        let starts = 6, days = 30;
        strictEqual(getWeeks(starts, days), 6);
    });
  });


  describe('makeMonth', () => {

    it('should be a function', () => {
      isFunction(makeMonth);
    });

    it('should return a length of 6', () => {
      strictEqual(makeMonth(5, 2345).length, 6);
    })

    it('should return an array of 6 week strings', () => {
      let month = 8, year = 2016;
      let expected = ['    1  2  3  4  5  6',
                      ' 7  8  9 10 11 12 13',
                      '14 15 16 17 18 19 20',
                      '21 22 23 24 25 26 27',
                      '28 29 30 31         ',
                      '                    '];
      deepEqual(makeMonth(month, year), expected);
    })

    describe('June 2016', () => {
      let month = 6,
      year = 2016,
      start = zeller(month, year);

      it('shoud return Start day of week', () => {
        strictEqual(start, 3);
      });

      it('should return number of weeks', () => {
        strictEqual(getWeeks(start, cal[month - 1].days), 5);
      });

      it('should return number of days in month', () => {
        strictEqual(cal[month - 1].days, 30);
      });

    });//End 'June 2016'

  });

  describe('getMonthName', () => {
    it('should take a number and convert it to the correct month name string', () => {
      let month = 1
      strictEqual(getMonthName(month), "January");
    });
     it('should take a number and convert it to the correct month name string', () => {
      strictEqual(getMonthName(3), "March");
    });
  })

  describe('setMonthTitle', () => {
    it('should take getMonthName and append the correct year', () => {
      let month = "January",
          year = 2016;
      strictEqual(setMonthTitle(month, year), "January 2016")
    })
  })

  describe('getMonthLength', () => {
    it.skip('should take a month number and return the # of days in the month', () => {
      let month = 1
      strictEqual(getMonthLength(month), 31);
    });
  })

  describe('checkLeapYear', () => {
    it.skip('should take a year and return true for leap year', () => {
      let year = 2016
      strictEqual(checkLeapYear(year), false);
    });
  })


});
