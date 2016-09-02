'use strict';

const { isFunction, strictEqual } = require('chai').assert;
const { centerText, weekDaysString, addLeftPad } = require('../lib/formatting')
const { dayNames } = require('../lib/cal')

describe('formatting module', () => {
	describe('centerText', () => {
    it('should centered based on a width of 20', () => {
    		let text = "January 2016"
        strictEqual(centerText(text), "    January 2016    ");
    });
    it('should centered based on a width of 20', () => {
    		let text = "June 2016"
        strictEqual(centerText(text), "     June 2016      ");
    });
  });

  describe('weekDaysString', () => {
  	it('should return a string of the days of the week', () => {
  		strictEqual(weekDaysString(dayNames), "Su Mo Tu We Th Fr Sa")
  	})
  })

  describe('addLeftPad', () => {
    it('should return a string of specified number of spaces', () => {
      strictEqual(addLeftPad(3), "   ");
    })
  })
})
