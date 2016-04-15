/**
 Author: Nikhil Sidhaye.
 Purpose: Methods to read files from directory & allow to pass function whcih process on filecontnets.
 TODO: 
 1. Also develop sync implementaion.
 2. For very large files instead of reading whole file in memory we can use fs.createReadStream and read line by line. 
 	Unfortunately it might be time consuming oepration.
*/

var fs = require('fs')
var path = require('path')
var readline = require('readline')
var log = require('debug')('myApp:fileUtil')

/**
	This function will read files from supplied directory path. And it will call function to process on that files.
*/
function readFiles(dirName, processOnFileContent, onError) {
	fs.readdir(dirName, function(err, fileNames) {
		if(err) {
			onError(err)
			return
		}

		//Now we have all fileNames....
		fileNames.forEach(function(fileName) {
			var filePath = path.join(dirName, fileName)
			fs.readFile(filePath, function(err, content)  {
				if(err) {
					onError(err) 
					return
				}
				processOnFileContent(filePath, content)
			})
		})

	})
}



function readHugeFiles(dirName, processOnFileLine, onError) {
	fs.readdir(dirName, function(err, fileNames) {
		if(err) {
			onError(err)
			return
		}

		//Now we have all fileNames....
		fileNames.forEach(function(fileName) {
			var filePath = path.join(dirName, fileName)

			var lineReader = readline.createInterface({input: fs.createReadStream(filePath)})

			lineReader.on('line', function(line) {
				processOnFileLine(filePath, line)
			}) 	

			lineReader.on('close', function() {
				log("File " + filePath + " encounter file close operation")
			})
		})
	})	
}

module.exports.readFiles=readFiles
module.exports.readHugeFiles=readHugeFiles