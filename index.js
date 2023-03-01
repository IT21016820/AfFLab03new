console.log("Application Frameworks")

//read file
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function(err,data){
    if(err)throw err;
    consol.log(data);
});