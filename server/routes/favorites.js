const express = require('express')
let router = express.Router()
const db = require('../database/database')


router
    .get('/:userid', (req, res) => {
    // ----- get favorites (by user id) ----- //
        db.query('SELECT id, title, year, director, imageurl FROM favorites fav JOIN movie mov ON (fav.id_movie = mov.id) WHERE fav.id_user = ?', [parseInt(req.params.userid)], (err, rows) => {
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
        db.query('INSERT INTO favorites (id_user, id_movie) VALUES (?,?)', [req.body.id_user, req.body.id_movie], (err) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(201)
            }
        })
    })
    .delete('/', (req, res) => {
    // ----- delete favorite by user id and movie id ----- //
        db.query('DELETE FROM favorites WHERE id_user = ? AND id_movie = ?', [req.body.id_user, req.body.id_movie], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else if (rows.affectedRows === 0) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
        })
    })


module.exports = router