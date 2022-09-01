const db = require('../database/db')

module.exports = function (username, password, uid) {
    return new Promise((resolve, reject) => {
        let sql = "UPDATE users SET username=? , password=? WHERE uid = ?";
        db.query(sql, [username, password, uid], (err, result) => {
            err ? reject(err) : resolve(result)
        })
    })
}
