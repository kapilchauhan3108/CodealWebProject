const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeal_Development');
console.log('connection 1');
const db = mongoose.connection;

db.on('error' , console.error.bind(console, 'Error connecto=ing to MangoDB'));
console.log('connection 2');

db.once('open' , function(){
    console.log('Conncted to database :: MangoDb');
});

console.log('connection 3');


module.exports = db ;