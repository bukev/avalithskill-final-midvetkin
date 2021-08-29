const express = require('express')
let router = express.Router()
const db = require('../database/database')
const jwt = 



router.get('/', (req, res) => {
    //const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    const {email, password} = req.body

    db.query('SELECT id, email, password, admin FROM user WHERE email = ? AND password = ?', [email, password], (err, rows) => {
        if (err)  {
            res.sendStatus(401)
        } else if (rows.length === 0) {
            res.sendStatus(401)
        } else {
            res.send(rows)
        }
    })

})

module.exports = router