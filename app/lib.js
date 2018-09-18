/*
 * Library
 * 
 */

// Create a container
const lib = {};

// Cache for fibonacci numbers for storing calculated results
lib.fibNumbersCache = {};

// Find the n-th fibonacci number (the first two are equal to 1 and 1)
lib.findFibonacci = n => {
    n = typeof n == 'number' && n > 0 && n % 1 == 0 ? n : null;

    // If the argument is not a positive integer, return null
    if (!n) {
        return null;
    }

    // If the argument is 1 or 2, return 1
    if (n == 1 || n == 2) {
        return 1;
    }

    // If the result is already in the cache, return this result
    if (lib.fibNumbersCache[n]) {
        return lib.fibNumbersCache[n];
    }

    // Calculate the result with a recursive function
    const result =  lib.findFibonacci(n - 1) + lib.findFibonacci(n - 2);

    // Save the result to cache and return it
    lib.fibNumbersCache[n] = result;
    return result;

};

// Create a random string with the specified length (default to 10)
lib.createRandomString = length => {
    // If the length is not specified, set the value to 10, if it is not a positive integer, set the value to null
    length = typeof length == 'undefined' ? 10 : typeof length == 'number' && length > 0 && length % 1 == 0 ? length : null;

    // If the length does not fit, return null
    if (!length) {
        return null;
    }

    // Add a random char from list of possible chars to a string
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        str += possibleChars[randomIndex];
    }
    return str;
};

// Create a hash string
lib.isPalindrome = str => {
    // If str is not a non-empty string, set the value to null
    str = typeof str == 'string' && str.length > 0 ? str : null;

    // If str does not fit, return null
    if (!str) {
        return null;
    }

    // Only letters remain, convert their to lowercase
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Add letters to reverseStr in reverse order
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    // Return true if strings are equal, otherwise return false
    return str == reverseStr;
};


// Export the module
module.exports = lib;