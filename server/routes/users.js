// const express = require('express')
const router = require('express').Router()
const db = require('../database/database')


router
    .get('/', (req, res) => {
    // ----- get users ----- //
        db.query('SELECT * FROM movie_site.user', (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(rows)
            }
        })
    })
    .post('/', (req, res) => {
        db.query('INSERT INTO movie_site.user (email, password, admin) VALUES (?,?,?)', [req.body.email, req.body.password, req.body.admin], (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(rows)
            }
        })
    })


module.exports = router