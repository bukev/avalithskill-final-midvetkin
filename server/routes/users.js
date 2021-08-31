const express = require('express')
const router = require('express').Router()
const db = require('../database/database')
const jwt = require('jsonwebtoken')

router
    .get('/', (req, res) => {
    // ----- get users, for testig purposes ----- //
        db.query('SELECT * FROM user', (err, rows) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(rows)
            }
        })
    })
    .post('/', (req, res) => {
    // ----- get user data ----- //
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        jwt.verify(token, 'asd', (err, result) => {
            if(err) return res.sendStatus(403)

            res.send(result.user)
        })
    
    })


module.exports = router