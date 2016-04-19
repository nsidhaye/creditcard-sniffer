var assert = require('assert')
var fileUtil = require('./fileUtil.js')
var debug = require('debug')('myApp:testFileUtil')

//Dummy function for test purpose
function processOnFileContent(fileName, content) {
	debug("File Name: " + fileName)
	debug("Contet Size: " + content.length)

	throw new Error("Testing failed..")
}

function onError(error) {
	debug(error)
	throw new Error("Testing failed..")
}


describe('ReadFiles', function() {
	debug("Current Dir: " + __dirname)
	it('Should Read files', function(done) {
	assert.doesNotThrow(
		function() {
			fileUtil.readFiles(__dirname,processOnFileContent,onError) 
		},
		Error("Testing failed..")
		)

		debugger
		done()		
	})
	
})



/*
	TODO:  Need to find way for checking exception 

	ref: http://stackoverflow.com/questions/26073873/assertionerror-missing-expected-exception-when-testing-async-requirejs-call-usi
*/

// describe('ReadFiles for non existent file', function() {
// 	const error = new Error("no such file or directory")
// 	error.errno=-4058
// 	error.code='ENOENT'

// 	it('Should throw exception for No Such file or dir', function() {
// 		assert.throws(function() {
// 			fileUtil.readFiles("NoSuchDirExists",processOnFileContent,onError) 
// 		}, error)
// 	})
// })



// { [Error: ENOENT: no such file or directory, scandir 'D:\Projects\MEAN\PCI\NoSuchDirExists']
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'scandir',
//   path: 'D:\\Projects\\MEAN\\PCI\\NoSuchDirExists' }
//   myApp:testFileUtil Error: ENOENT: no such file or directory, scandir 'D:\Projects\MEAN\PCI\NoSuchDirExists'
//     at Error (native) +30ms
