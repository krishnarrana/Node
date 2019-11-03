var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
const port = 3000;

var nodemailer = require('nodemailer');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/index', function (req, res) {
    res.render('index')
})
app.get('/about', function (req, res) {
    res.render('about')
})
app.get('/contact', function (req, res) {
    res.render('contact')
})
app.post('/contact/send', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
    var mailOptions = {
        from: 'Krishna Rana',
        to: '',
        text: 'Hello',
        html: '<h1>Hello</h1>'
    }
    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message Sent:')
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})