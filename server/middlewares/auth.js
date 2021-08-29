const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log('autenticando...')
    jwt.verify(token, 'asd', (err, user) => {
        if (err) return res.sendStatus(403)
        if (user.admin !== 1) {
            res.sendStatus(401)
        } else {
            next()
        }
    })
}

module.exports = authToken