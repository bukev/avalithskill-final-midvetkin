const mysql = require('mysql');
const {host, database, user, password} = require('../../config')

const db = mysql.createConnection({
    host: host,
    database: database,
    user: user,
    password: password,
});

// ----- database connection ----- //
db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('database connected');
    }
});



module.exports = db