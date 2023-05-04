const {DataTypes,Model, db} = require('../db/connection.js');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    bady: DataTypes.STRING,
    createdAt: DataTypes.STRING
  },
  { sequelize: db }
)


module.exports = Post;