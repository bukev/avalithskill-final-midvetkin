const express = require('express');
const app = express();
const PORT = 3001;
const users = require('./routes/users')
const movies = require('./routes/movies')
const favorites = require('./routes/favorites')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', users)
app.use('/movies', movies)
app.use('/favorites', favorites)


// ----- mounting server ----- //
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

