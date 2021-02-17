const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdi(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Fold');
})