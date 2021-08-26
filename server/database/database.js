const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'books',
    user: 'root',
    password: 'root',
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