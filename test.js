var assert = require('assert')
var pattern = require("./pattern.js")
var debug = require('debug')('myApp:test')


describe('pattern#RegEx', function() {
	var testString = "4454365654654365dfssasdas"

	it('Should identify credit card number', function() {
		assert.equal(testString.match(pattern.RegEx()),"4454365654654365")
	})
})

describe('pattern#RegE->Multi', function() {
	var testString1 = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"

	it('Should identify credit card number', function() {
		assert.equal(testString1.match(pattern.RegEx()),"4454365654654365,4454-3656-5465-4365")
	})
})

describe('Pattern#match', function() {
	var testString1 = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"
	var result = {totalHits: 2, foundInstances: ['4454365654654365','4454-3656-5465-4365']}
	var data = pattern.findMatches(null,pattern.RegEx(),testString1)

	debug(data)

	it('Should identify credit card numbers', function() {
		assert.deepEqual(data,result)
	})
})