const db = require('../database/db')

module.exports = function (uid) {
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM users WHERE uid = ?";
        db.query(sql, [uid], (err, result) => {
            err ? reject(err) : resolve(result)
        })
    })
}
