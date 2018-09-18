/*
 * Test runner
 * 
 */

// Dependencies
const unit = require('./unit');

// Container
const test = {};

// Add unit tests
test.unit = unit;

// Find the total number of tests
function findTestsNumber() {
    let count = 0;

    for (let key in test) {
        if (test.hasOwnProperty(key)) {
            const subTests = test[key];

            for (let key in subTests) {
                if (subTests.hasOwnProperty(key)) {
                    count++;
                }
            }
        }
    }
    return count;
}

// Run tests
function runTests() {
    const limit = findTestsNumber();
    let count = 0;
    let successes = 0;
    const errors = [];

    for (let key in test) {
        if (test.hasOwnProperty(key)) {
            const subTests = test[key];

            for (let subKey in subTests) {
                if (subTests.hasOwnProperty(subKey)) {
                    const testFunction = subTests[subKey];
                    try {
                        testFunction(() => {
                            count++;
                            successes++;
                            if (count == limit) {
                                showTestInfo(count, successes, errors);
                            }
                        });
                    } catch(e) {
                        count++;
                        errors.push({
                            name: subKey,
                            message: e
                        });
                        if (count == limit) {
                            showTestInfo(count, successes, errors);
                        }
                    }
                    
                }
            }
        }
    }
}

function showTestInfo(count, successes, errors) {

    // Center string with dashes
    function centered(str) {
        const width = process.stdout.columns;
        const leftPadding = Math.floor((width - str.length) / 2);
        const rightPadding = width - str.length - leftPadding;

        let line = '';
        for (let i = 0; i < leftPadding; i++) {
            line += '-';
        }
        line += str;
        for (let i = 0; i < rightPadding; i++) {
            line += '-';
        }
        console.log(line);
    }

    console.log('');
    centered('BEGIN TESTS');
    console.log('');

    console.log(`Total: ${count}`);
    console.log('\x1b[32m%s\x1b[0m', `Pass: ${successes}`);
    console.log('\x1b[31m%s\x1b[0m', `Fail: ${errors.length}`);

    if (errors.length) {
        
        errors.forEach(error => {
            console.log('');
            console.log('\x1b[31m%s\x1b[0m', error.name);
        });

        console.log('');
        centered('BEGIN ERRORS');
        console.log('');

        errors.forEach(error => {
            console.log('\x1b[31m%s\x1b[0m', error.name);
            console.log('');
            console.log(error.message);
            console.log('');
        });
        
        console.log('');
        centered('END ERRORS');
        console.log('');
    }

    console.log('');
    centered('END TESTS');
    console.log('');
}

// Run the tests
runTests();

// Kill the process
process.exit(0);