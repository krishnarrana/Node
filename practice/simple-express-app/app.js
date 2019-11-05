const express = require('express');

const app = express();
app.use(express.json())
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
        res.status(404).send('The course was not found with the given id ' + parseInt(req.params.id))
    }
    res.send(course)
});
app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('name is required and must be more that 2 charater')
    } else {
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course);
        res.send(course);
    }

})

app.put('/api/courses/:id', (req, res){
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course was not found with the given id ' + parseInt(req.params.id))
    }
})
app.listen(3000, () => {
    console.log('Listening on port 3000')
})