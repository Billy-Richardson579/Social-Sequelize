const {Sequelize, db} = require('./db/connection');
let Post = db.define("post",{
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING
})


module.exports = Post;