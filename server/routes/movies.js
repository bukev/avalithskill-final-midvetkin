const express = require('express')
let router = express.Router()
const db = require('../database/database')


router
    .get('/', (req, res) => {
    // ----- get movies ----- //
        db.query('SELECT id, title, year, director, imageurl FROM movie_site.movie', (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(rows)
            }
        })
    })
    .post('/', (req, res) => {
    // ----- new movie ----- //
        db.query('INSERT INTO movie_site.movie (title, year, director, imageurl) VALUES (?,?,?,?)', [req.body.title, req.body.year, req.body.director, req.body.imageurl], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(201)
            }
        })
    })


module.exports = router