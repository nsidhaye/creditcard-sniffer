var pattern = require("./pattern.js")
var fileUtil = require('./fileUtil.js')
var debug = require('debug')('myApp:index')


var testString = "4454365654654365dfssasdas"

var testString1 = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"


// console.log("All Match: " + testString1.match(pattern.RegEx()))

// var result = pattern.findMatches(null,pattern.RegEx(),testString1)

// console.log(result)


//Dummy function for test purpose
function processOnFileContent(fileName, content) {
	debug("File Name: " + fileName)
	debug("Contet: " + content)
}

// console.time('readFiles');
fileUtil.readFiles('D:/Projects/MEAN/sample',processOnFileContent,null)
// console.timeEnd('readFiles')


// console.time('readHugeFiles');
fileUtil.readHugeFiles('D:/Projects/MEAN/sample',processOnFileContent,null)
// console.timeEnd('readHugeFiles')
