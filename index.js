console.log("Application Frameworks")

//read file
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function(err,data){
    if(err)throw err;
    consol.log(data);
});

//write to file
const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});