const express = require('express')
let router = express.Router()
const db = require('../database/database')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    //const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    const {email, password} = req.body

    db.query('SELECT id, email, password, admin FROM user WHERE email = ? AND password = ?', [email, password], (err, rows) => {
        if (err)  {
            res.sendStatus(401)
        } else if (rows.length === 0) {
            res.sendStatus(401)
        } else {
            const user = rows[0]

            const token = jwt.sign({user}, 'asd')

            res.json({'token': token})
        }
    })

})

module.exports = router