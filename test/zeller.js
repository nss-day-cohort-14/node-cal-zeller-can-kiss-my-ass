'use strict';

const { isFunction, strictEqual } = require('chai').assert;
const { zeller } = require('../lib/zeller');


describe('zeller module', () => {

  describe('zeller', () => {

    it('should be a function', () => {
      isFunction(zeller);
    });

    it('should return the first day of August in 2016', () => {
      strictEqual(zeller(8, 2016), 1);
    });

  });

});
