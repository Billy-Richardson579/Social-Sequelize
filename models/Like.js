const {Sequelize,db} = require('./db/connection')
let Like = db.define("like",{
    reactionType: Sequelize.STRING,
    createdAT: Sequelize.STRING
})

module.exports = Like;