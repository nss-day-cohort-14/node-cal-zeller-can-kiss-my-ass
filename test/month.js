'use strict';

const { isFunction, strictEqual, oneOf } = require('chai').assert;
const { getWeeks, makeMonth } = require('../lib/month');
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


  describe('makeMonth()', () => {

    it('should be a function', () => {
      isFunction(makeMonth);
    });

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

});
