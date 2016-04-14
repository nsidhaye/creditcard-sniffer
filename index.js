var pattern = require("./pattern.js")
var debug = require('debug')('myApp:index')


var testString = "4454365654654365dfssasdas"

var testString1 = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"


console.log("All Match: " + testString1.match(pattern.RegEx()))

var result = pattern.findMatches(null,pattern.RegEx(),testString1)

console.log(result)

