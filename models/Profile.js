const {Sequelize, db} = require('./db/connection');
let Profile = db.define("profile",{
    bio: Sequelize.STRING,
    profilePicture: Sequelize.STRING,
    birthday: Sequelize.STRING
})


module.exports = Profile;