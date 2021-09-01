const express = require('express')
let router = express.Router()
const db = require('../database/database')
const authorize = require('../middlewares/auth')


router
    .get('/', (req, res) => {
    // ----- get movies ----- //
        db.query('SELECT id, title, year, director, imageurl FROM movie', (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else if (rows.length === 0) {
                res.sendStatus(404)
            } else {
                res.send(rows)
            }
        })
    })
    .get('/:id', (req, res) => {
    // ----- get movie by id ----- //
        db.query('SELECT id, title, year, director, imageurl FROM movie WHERE id=?', [parseInt(req.params.id)], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else if (rows.length === 0) {
                res.sendStatus(404)
            } else {
                res.send(rows[0])
            }
        })
    })
    .post('/', authorize, (req, res) => {
    // ----- new movie ----- //
        db.query('INSERT INTO movie (title, year, director, imageurl) VALUES (?,?,?,?)', [req.body.title, req.body.year, req.body.director, req.body.imageurl], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(201)
            }
        })
    })
    .put('/:id', authorize, (req, res) => {
    // ----- modify by id ----- //
        db.query('UPDATE movie SET title = ?, year = ?, director = ?, imageurl = ? WHERE id = ?', [req.body.title, req.body.year, req.body.director, req.body.imageurl, parseInt(req.params.id)], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else if (rows.length === 0) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
        })
    })
    .delete('/:id', authorize, (req, res) => {
    // ----- delete by id ----- //
        db.query('DELETE FROM movie WHERE id = ?', parseInt(req.params.id), (err, rows) => {
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