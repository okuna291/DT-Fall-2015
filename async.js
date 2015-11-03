// ////// This script will check if a file named async.txt exists, if it doesn't, it will create it, and write the contents of test.js (this file) to async.txt
// var fs = require('fs');

// var path = './async.txt';
// // check if async.txt exists
// fs.stat(path, function(err, stats) {
//     if (stats == undefined) {
//         // read the contents of this file
//         fs.readFile(__filename, function(err, content) {
//             var code = content.toString();
//             // write the content to async.txt
//             fs.writeFile(path, code, function(err) {
//                 if (err) throw err;
//                 console.log('async.txt created!');
//             });
//         });    
//     }
// });



////// This script will check if a file named async.txt exists, if it doesn't, it will create it, and write the contents of test.js (this file) to async.txt
var fs = require('fs');
var async = require('async');

var path = './async.txt';
async.waterfall([
    // check if async.txt exists
    function(cb) {
        fs.stat(path, function(err, stats) {
            if (stats == undefined) cb(null);
            else console.log('async.txt exists');
        });
    },
    // read the contents of this file
    function(cb) {
        fs.readFile(__filename, function(err, content) {
            var code = content.toString();
            cb(null, code);
        });
    },
    // write the content to async.txt
    function(code, cb) {
        fs.writeFile(path, code, function(err) {
            if (err) throw err;
            console.log('async.txt created!');
        });
    }
]);