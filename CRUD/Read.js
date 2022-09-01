const db = require('../database/db')

module.exports = {
    getUsers: function () {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users", (err, result) => {
                err ? reject(err) : resolve(result)
            })
        })
    }
}
