

// let capital = new Object();
// capital["total"] = 2000
// capital["available"] = capital.total - capital.debt
// capital["debt"] = 700
// let a
// let b
// let c
// --------------
// 'use strict';
//GET DATA
//READ DATA
//POST DATA

//Get Data

//Bundle selected access to JSONData
const fs = require('fs');

// we need a function to load files
// done is a "callback" function
// so you call it once you're finished and pass whatever you want
// in this case, we're passing the `responseText` of the XML request
// var loadFile = function (filePath, done) {
//     var xhr = new XMLHTTPRequest();
//     xhr.onload = function () { return done(this.responseText) }
//     xhr.open("GET", filePath, true);
//     xhr.send();
// }


// paths to all of your files
var myFiles = [ "./json/data.json", "./json/dataStore.temp.json", "./json/dataVault.json", "./json/user.temp.json", "./json/db.facet.json" ];
// where you want to store the data
let tempDataArray = [];
let readParseJSON = tempDataArray;
// loop through each file
// myFiles.forEach(function (file, i) {
//     // and call loadFile
//     // note how a function is passed as the second parameter
//     // that's the callback function
//     fs.readFile(file, function (responseText) {
// 		// if (err) throw err;
//         // we set jsonData[i] to the parse data since the requests
//         // will not necessarily come in order
//         // so we can't use JSONdata.push(JSON.parse(responseText));
//         // if the order doesn't matter, you can use push
//         jsonData[i] = JSON.parse(responseText);
//         // or you could choose not to store it in an array.
//         // whatever you decide to do with it, it is available as
//         // responseText within this scope (unparsed!)
//     })

// }
// )
//READ ALL FILES
//NOTE: SEPARATE for individual purposes and security
//NOTE: only loan required when needed

//PRoblem... to solve:  Global empty array executes first, showing empty... data loaded loads on command... solution? 
// capsulate the load file in a staging cycle, save to cache data for further use.
for(var i=0; i<myFiles.length; i++){
	// JSONDataArray.push(myFiles[i]);
    fs.readFile(myFiles[i], (err, data) => {
		if (err) throw err;
		tempDataArray.push(JSON.parse(data));
		console.log(`Loaded myFile JSON data into tempDataArray: ${tempDataArray.length}`)
	    
		let readParseJSON = JSON.parse(data);
		console.info(readParseJSON);

		// return stuff;
});
// console.info(JSONDataArray);
console.info(readParseJSON);

	// // })
	// console.info(myFiles)
}

// var myFileArray = jsonData.length;
// console.info(myFileArray)








	// let importJSon = ;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }


// function get_JSONdata(obj, obj_name) {
// 	let result = {};
// 	for (let i in obj) {
// 	  result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
// 	}
// 	result += '<hr>';
// 	return result;
//   }

// //Read Data


console.log('This is after the read call');

//Post Data


let capital = 3000,
    inOrder = 422,
    available = capital - inOrder
const data1 = available

// Shorthand property names (ES2015)
let o = {capital, inOrder, available}

// In other words,
console.log((o.capital === {capital}.capital)) // true















function getAvg(...values) {
	if (values.length === 0) {
		return 0;
	}

	let sum = 0
	for (let i in values) {
		if (values.hasOwnProperty(i)) {
			sum += values[i];
		}
	}
	return sum / values.length;
}
let avg = getAvg(1, 2, 3, 4);
// avg is 2.5









console.info(`**avg: ${avg}`)
console.info(`**avg: ${avg}`)
console.info(`**Capital / 10: ${capital}`)
console.info(`**In Order: ${inOrder}`)
console.info(`**Capital available: ${available}`)