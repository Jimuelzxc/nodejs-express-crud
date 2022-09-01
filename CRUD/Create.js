const db = require('../database/db')

module.exports = function (username, password) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO users (username, password) VALUES(?, ?)";
        db.query(sql, [username, password], (err, result) => {
            err ? reject(err) : resolve(result)
        })
    })
}
