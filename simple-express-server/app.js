var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
const port = 3000;

var nodemailer = require('nodemailer');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})