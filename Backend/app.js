// app.js
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const mongoose = require('./connection/mongoose.connection');
const bodyparser = require('body-parser')
const cors = require('cors')


app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())
app.use(cors())

require('./routes')(app)

server.listen(8000, () => {
    console.log("Server is running at port 8000");
});


 


















