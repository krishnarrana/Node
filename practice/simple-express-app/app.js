const express = require('express');
const log = require('./logger');
const auth = require('./authentication');
const Joi = require('joi');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(log)
app.use(auth)
const courses = [
    {
        id: 1, name: 'course 1'
    },
    {
        id: 2, name: 'course 2'
    },
    {
        id: 3, name: 'course 3'
    }
]

app.get('/', function (req, res) {
    res.send('Hello world');
});
app.get('/api/courses', function (req, res) {
    res.send(courses);
});
app.get('/api/courses/:id', function (req, res) {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course was not found with the given id ' + parseInt(req.params.id))
    }
    res.send(course)
});
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body)
    if (error) {
        res.status(404).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);

})

app.put('/api/courses/:id', (req, res) => {
    //look up the course
    //if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course was not found with the given id ' + parseInt(req.params.id))
    }
    //validate
    //if not validate, return 400 - bad request
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    //Updated the course
    // return the updated course
    course.name = req.body.name;
    res.send(course)
})
app.delete('/api/courses/:id', (req, res) => {
    // look up the course
    // not existing , return 404 not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    console.log('course', course)
    if (!course) {
        return res.status(404).send('The course was not found with the given id ' + parseInt(req.params.id))
    }
    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1)

    //return
    res.send(courses)
})
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}



app.listen(3000, () => {
    console.log('Listening on port 3000')
})