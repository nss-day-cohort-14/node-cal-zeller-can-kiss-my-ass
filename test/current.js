'use strict';

const { isFunction, strictEqual } = require('chai').assert;
const { currentMonth, currentYear } = require('../lib/current');


describe('current modules', () => {

  describe('currentMonth', () => {

    it('should be a function', () => {
      isFunction(currentMonth);
    });
    it('should be the current month', () => {
      strictEqual(currentMonth(), (new Date()).getMonth());
    });

  });


  describe('currentYear', () => {

    it('should be a function', () => {
      isFunction(currentYear);
    });

    it('should be the current year', () => {
      strictEqual(currentYear(), (new Date()).getFullYear());
    });

  });


});
