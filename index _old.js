var pattern = require("./pattern_old.js")
var debug = require('debug')('myApp')

// RegEx()

var testString = "4454365654654365dfssasdas"

var testString1 = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"

function handleResult(err, result) {
    if (err) {
        // Just an example. You may want to do something with the error.
        console.error(err.stack || err.message);

        // You should return in this branch, since there is no result to use
        // later and that could cause an exception.
        return;
    }

    // All your logic with the result.
    return result
}

console.log("All Match: " + testString1.match(pattern.RegEx(handleResult)))

// console.log(testString1.match(pattern.RegEx(handleResult)))


var result = pattern.findMatches(null,pattern.RegEx(handleResult),testString1)

console.log(result)

