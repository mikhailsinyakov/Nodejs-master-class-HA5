# Simple Test Runner
### Homework Assignment #5 [(Node.js master class)](https://pirple.thinkific.com)
___
In my repo you can see the /app and the /test folders

The /app folder contains the lib.js file, with 3 simple functions:
- findFibonacci(n) allows to find the n-th fibonacci number (the first two are equal to 1 and 1)
- createRandomString(length) allows to get a random string with specified length
- isPalindrome(str) lets you to know that str is a palindrome or not

The /test folder contains two files:
- unit.js contains all the unit tests for the functions
- index.js is a test runner that run all the tests

In order to use my test runner you need to:
- clone this repository to the selected folder
 ~~~
git clone https://github.com/mikhailsinyakov/Nodejs-master-class-HA5.git
 ~~~
- run node command with your own environment variables
~~~
node test
~~~