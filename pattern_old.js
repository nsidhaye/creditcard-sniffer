 
/**
 Author: Nikhil Sidhaye.
 Purpose: Create Pattern function so you can use it from other files.
 TODO: Create an Pattern object and move all constatnts on object level.
*/

var debug = require('debug')('myApp')


function RegEx(callback) {

	var  REPLACE_CHAR = 'X';
	var LEADING_MASK_LENGTH = 6;
	var TRAILING_MASK_LENGTH = 4;
	var VISA_REG_EX = "4[0-9]{3}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	var MASTERCARD_REG_EX = "5[1-5][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	//private String AMEX_REG_EX = "3[47][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3}";
	var  AMEX_REG_EX = "((3[47][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3})|" + "(3[47][0-9]{2}[-|\\s]??[0-9]{6}[-|\\s]??[0-9]{5}))";
	var DINERSCLUB_REG_EX = "3(?:0[0-5]|[68][0-9])[0-9][-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{2}";
	var DISCOVER_REG_EX = "6(?:011|5[0-9]{2})[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	//private static String JCB_REG_EX = "(?:2131|1800|35\\d{3})[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3}";

	var JCB_REG_EX = "((?:2131|1800)[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3})|" + "(35\\d{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4})";

	var strPattern = "(?:"
	strPattern += VISA_REG_EX
	strPattern += "|"
	strPattern += MASTERCARD_REG_EX
	strPattern += "|"
	strPattern += AMEX_REG_EX
	strPattern += "|"
	strPattern += DINERSCLUB_REG_EX
	strPattern += "|"
	strPattern += DISCOVER_REG_EX
	strPattern += "|"
	strPattern += JCB_REG_EX

	strPattern += ")"

	// var rePattern = new RegExp(VISA_REG_EX + "|" + MASTERCARD_REG_EX + "|" + AMEX_REG_EX + "|" + DINERSCLUB_REG_EX + "|" + DISCOVER_REG_EX + "|" +JCB_REG_EX)

	debug("Pattern : " + strPattern)

	var regPattern = new RegExp(strPattern,'g')

	return callback(null, regPattern);
}



var testString = "s dfsdf ksd fks \nfksj4454365654654365dfssasdas\ndfgd4454-3656-5465-4365gczxd"

function getResult(err, result) {
	if (err) {
        // Just an example. You may want to do something with the error.
        console.error(err.stack || err.message)

        // You should return in this branch, since there is no result to use
        // later and that could cause an exception.
        return;
    }

    // All your logic with the result.
    // console.log("Result from handleResult: " + result)
    return result
}

/**
 * This will actually find matches...
 */
 function findMatches(error, regexPattern, testStr) {

 	var totalHits = 0
 	var foundInstances = []

 	// console.log("findMatches::::::")
 	if (error) {
        // Just an example. You may want to do something with the error.
        console.error("Error: " + error.stack || error.message)

        // You should return in this branch, since there is no result to use
        // later and that could cause an exception.
        return
    }

    // All your logic with the result.
    // console.log("In findMatches: " + regexPattern)


    var myArray

    while((myArray = regexPattern.exec(testStr)) !== null) {
    	var msg = "Found " + myArray[0] + "."

    	msg += " Next Match starts at " + (myArray.index+1)

    	debug(msg)

    	// console.log(msg)

    	totalHits++
    	foundInstances.push(myArray[0])
    	
    }

    return {
    	totalHits: totalHits,
    	foundInstances: foundInstances
    }
}


//You can call this from any function....
// findMatches(null,RegEx(handleResult),testString)

module.exports.RegEx=RegEx
module.exports.findMatches=findMatches
module.exports.getResult=getResult