const mysql = require('mysql2');
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"todoapp"

}
);
module.exports = conn;