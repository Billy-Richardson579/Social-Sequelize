const {Sequelize , db} = require('./db/connection')
let Comment = db.define("comment", {
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
})


module.exports = Comment;