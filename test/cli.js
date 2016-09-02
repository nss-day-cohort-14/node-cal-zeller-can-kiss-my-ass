'use strict';

const { exec } = require('child_process');
const { strictEqual } = require('chai').assert;


const calString =
`    August 2016     \nSu Mo Tu We Th Fr Sa\n    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31         \n`;

const calYear = '                             2016\n\n      January               February               March        \nSu Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n                1  2      1  2  3  4  5  6         1  2  3  4  5\n 3  4  5  6  7  8  9   7  8  9 10 11 12 13   6  7  8  9 10 11 12\n10 11 12 13 14 15 16  14 15 16 17 18 19 20  13 14 15 16 17 18 19\n17 18 19 20 21 22 23  21 22 23 24 25 26 27  20 21 22 23 24 25 26\n24 25 26 27 28 29 30  28 29                 27 28 29 30 31\n31\n       April                  May                   June        \nSu Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n                1  2   1  2  3  4  5  6  7            1  2  3  4\n 3  4  5  6  7  8  9   8  9 10 11 12 13 14   5  6  7  8  9 10 11\n10 11 12 13 14 15 16  15 16 17 18 19 20 21  12 13 14 15 16 17 18\n17 18 19 20 21 22 23  22 23 24 25 26 27 28  19 20 21 22 23 24 25\n24 25 26 27 28 29 30  29 30 31              26 27 28 29 30\n\n        July                 August              September      \nSu Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n                1  2      1  2  3  4  5  6               1  2  3\n 3  4  5  6  7  8  9   7  8  9 10 11 12 13   4  5  6  7  8  9 10\n10 11 12 13 14 15 16  14 15 16 17 18 19 20  11 12 13 14 15 16 17\n17 18 19 20 21 22 23  21 22 23 24 25 26 27  18 19 20 21 22 23 24\n24 25 26 27 28 29 30  28 29 30 31           25 26 27 28 29 30\n31\n      October               November              December      \nSu Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n                   1         1  2  3  4  5               1  2  3\n 2  3  4  5  6  7  8   6  7  8  9 10 11 12   4  5  6  7  8  9 10\n 9 10 11 12 13 14 15  13 14 15 16 17 18 19  11 12 13 14 15 16 17\n16 17 18 19 20 21 22  20 21 22 23 24 25 26  18 19 20 21 22 23 24\n23 24 25 26 27 28 29  27 28 29 30           25 26 27 28 29 30 31\n30 31\n';


describe('cli module', () => {

  it.skip('should handle no arguments', (done) => {
    exec('bin/node-cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        strictEqual(stdout.toString(), stdout2);
        done();
      })
    });
  });


  it.skip('should handle 1 argument, which should be full cal year', (done) => {
    exec('bin/node-cal 2016', (err, stdout) => {
        strictEqual(stdout.toString(), calYear);
        done();
    });
  });


  it.skip('should handle 1 arguments', (done) => {
    exec('bin/node-cal 8 2016', (err, stdout) => {
        strictEqual(stdout.toString(), calString);
        done();
    });
  });

});
