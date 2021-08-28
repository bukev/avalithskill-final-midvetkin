const express = require('express')
let router = express.Router()
const db = require('../database/database')


router
    .get('/:userid', (req, res) => {
    // ----- get favorites (by user id) ----- //
        db.query('SELECT title, year, director, imageurl FROM movie_site.favorites fav JOIN movie_site.movie mov ON (fav.id_movie = mov.id) WHERE fav.id_user = ?', [parseInt(req.params.userid)], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else if (rows.length === 0) {
                res.sendStatus(404)
            } else {
                res.send(rows)
            }
        })
    })
    .post('/', (req, res) => {
    // ----- new favorite ----- //
        db.query('INSERT INTO movie_site.favorites (id_user, id_movie) VALUES (?,?)', [req.body.id_user, req.body.id_movie], (err) => {
            if (err) {
                res.sendStatus(500).send(err)
            } else {
                res.sendStatus(201)
            }
        })
    })


module.exports = router