const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const db = mysql.createConnection({
    host: 'localhost',
    database: 'books',
    user: 'root',
    password: 'root',
});

// ----- database connection ----- //
db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('database connected');
    }
});

// ----- get users ----- //
app.get('/users', (req, res) => {
    db.query('SELECT * FROM movie_site.user', (err, rows) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(rows)
        }
    })
})

// ----- new user ----- //
app.post('/users', (req, res) => {
    db.query('INSERT INTO movie_site.user (email, password, admin) VALUES (?,?,?)', [req.body.email, req.body.password, req.body.admin], (err, rows) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(rows)
        }
    })
})

// ----- get movies ----- //
app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movie_site.movie', (err, rows) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(rows)
        }
    })
})

// ----- new movie ----- //
app.post('/movies', (req, res) => {
    db.query('INSERT INTO movie_site.movie (title, year, director, imageurl) VALUES (?,?,?,?)', [req.body.title, req.body.year, req.body.director, req.body.imageurl], (err, rows) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
})

// ----- new favorite ----- //
app.post('/favorites', (req, res) => {
    db.query('INSERT INTO movie_site.favorites (id_user, id_movie) VALUES (?,?)', [req.body.id_user, req.body.id_movie], (err) => {
        if (err) {
            res.sendStatus(500).send(err)
        } else {
            res.sendStatus(201)
        }
    })
})

// ----- get favorites ----- //
app.get('/favorites/:userid', (req, res) => {
    db.query('SELECT title, year, director FROM movie_site.favorites fav JOIN movie_site.movie mov ON (fav.id_movie = mov.id) WHERE fav.id_user = ?', [parseInt(req.params.userid)], (err, rows) => {
        if (err) {
            res.send(err)
        } else {
            res.send(rows)
        }
    })
})




// ----- mounting server ----- //
app.listen(PORT, () => {
    console.log(`server working on port ${PORT}`);
});