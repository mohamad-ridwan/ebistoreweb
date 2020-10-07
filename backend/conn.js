require('dotenv').config()

const mysql = require('mysql')

// Create Object Destruction
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const database = process.env.DB_DATABASE;

const conn = mysql.createConnection({
    host: host,
    user: username,
    database: database
})

conn.connect((err) => {
    if (err) { console.log(err) }
    else {
        console.log('success your connection')
    }
})

module.exports = conn;