const {DataTypes,Model , db} = require('../db/connection.js')

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  { sequelize: db }
)


module.exports = Comment;