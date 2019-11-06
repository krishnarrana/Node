const express = require('express');
const port = 8080;
const movies = [
    { id: 1, name: 'Ironman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Avangers' },
    { id: 4, name: 'Antman' }
]

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Welcome ')
})
app.get('/api/movies', (req, res) => {
    res.status(200).send(movies)
})
app.get('/api/movies/:id', (req, res) => {
    //check if course exist with id 2
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id);
    })
    if (!movie) {
        return res.status(404).send('Movie not found')
    }
    return res.status(200).send(movie)
})
app.post('/api/movies', (req, res) => {
    //validate the request movie
    if (!req.body.name) {
        return res.status(400).send('bad request')
    }
    const movie = {
        id: movies[movies.length - 1].id + 1,
        name: req.body.name
    }
    //add  movie
    movies.push(movie);
    //return movie
    return res.status(200).send(movie)
})
app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id)
    });
    if (!movie) {
        return res.status(404).send('Movie not found');
    }
    movie.name = req.body.name;
    return res.status(200).send(movie);
})
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find((movie) => {
        return movie.id === parseInt(req.params.id)
    });
    if (!movie) {
        return res.status(404).send('Movie not found');
    }
    const indexOfmovie = movies.indexOf(movie);

    movies.splice(indexOfmovie, 1);
    return res.status(200).send(movies)

})
app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})


