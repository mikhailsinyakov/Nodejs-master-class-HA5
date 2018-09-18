/*
 * Unit tests
 * 
 */


// Dependencies
const assert = require('assert');
const lib = require('../app/lib');

// Container
const unit = {};

// Lib.findFibonacci should return null, if input is a string
unit['lib.findFibonacci should return null, if input is a string'] = done => {
    const result = lib.findFibonacci('this is a string');
    assert.equal(result, null);
    done();
};

// Lib.findFibonacci should return null, if input is not specified
unit['lib.findFibonacci should return null, if input is not specified'] = done => {
    const result = lib.findFibonacci();
    assert.equal(result, null);
    done();
};

// Lib.findFibonacci should return a number, if input is 10
unit['lib.findFibonacci should return a number, if input is 10'] = done => {
    const result = lib.findFibonacci(10);
    assert.ok(typeof result == 'number');
    done();
};

// Lib.findFibonacci should return 55, if input is 10
unit['lib.findFibonacci should return 55, if input is 10'] = done => {
    const result = lib.findFibonacci(10);
    assert.equal(result, 55);
    done();
};

// Lib.findFibonacci should return 144, if input is 12
unit['lib.findFibonacci should return 144, if input is 12'] = done => {
    const result = lib.findFibonacci(12);
    assert.equal(result, 144);
    done();
};

// Lib.createRandomString should return null, if input is a string
unit['lib.createRandomString should return null, if input is a string'] = done => {
    const result = lib.createRandomString('text');
    assert.equal(result, null);
    done();
};

// Lib.createRandomString should return a string of length 10, if input is not specified
unit['lib.createRandomString should return a string of length 10, if input is not specified'] = done => {
    const result = lib.createRandomString();
    assert.ok(typeof result == 'string');
    assert.equal(result.length, 10);
    done();
};

// Lib.createRandomString should return a string of length 15, if input is 15
unit['lib.createRandomString should return a string of length 15, if input is 15'] = done => {
    const result = lib.createRandomString(15);
    assert.ok(typeof result == 'string');
    assert.equal(result.length, 15);
    done();
};

// Lib.createRandomString should return 10 different strings, when it was called 10 times
unit['lib.createRandomString should return 10 different strings, when it was called 10 times'] = done => {
    assert.doesNotThrow(() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            const newStr = lib.createRandomString();
            if (!arr.length) {
                arr.push(newStr);
            } else {
                const listOfMatchedStrings = arr.filter(str => str == newStr);
                if (listOfMatchedStrings.length) {
                    throw TypeError('This string is already exist');
                }
                arr.push(newStr);
            }
        }
    }, TypeError);

    done();
};

// Lib.isPalindrome should return null if input is not non-empty string
unit['lib.isPalindrome should return null if input is not non-empty string'] = done => {
    const result = lib.isPalindrome();
    assert.equal(result, null);
    done();
};

// Lib.isPalindrome should return false if input is 'not a palindrome'
unit['lib.isPalindrome should return false if input is "not a palindrome"'] = done => {
    const result = lib.isPalindrome('not a palindrome');
    assert.ok(typeof result == 'boolean');
    assert.equal(result, false);
    done();
};

// Lib.isPalindrome should return true if input is 'Madam, I'm Adam'
unit['lib.isPalindrome should return true if input is "Madam, I\'m Adam"'] = done => {
    const result = lib.isPalindrome('Madam, I\'m Adam');
    assert.ok(typeof result == 'boolean');
    assert.equal(result, true);
    done();
};

// Export the module
module.exports = unit;