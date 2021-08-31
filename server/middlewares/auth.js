const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    jwt.verify(token, 'asd', (err, result) => {
        const {user} = result
        
        if (err) return res.sendStatus(403)

        if (user.admin !== 1) {
            return res.sendStatus(401)
        } else if (user.admin === 1) {
            next()
        }
    })
}

module.exports = authToken