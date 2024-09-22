// mongoose.connection.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error', () => {
    console.log("DB connection error");
});

mongoose.connection.on('connected', () => {
    console.log('DB connection successfully');
});

module.exports = mongoose;


