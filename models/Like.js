const {DataTypes,Model,db} = require('../db/connection.js')

class Like extends Model {}

Like.init(
  {
    reactionType: DataTypes.STRING,
    createdAT: DataTypes.STRING,
  },
  { sequelize: db }
)

module.exports = Like;