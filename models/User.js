const {Sequelize, db} = require('./db/connection');
let User = db.define("user",{
    username: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = User;