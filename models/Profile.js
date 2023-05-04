const {DataTypes,Model, db} = require('../db/connection.js');

class Profile extends Model {}

Profile.init(
  {
    bio: DataTypes.STRING,
    profilePictures: DataTypes.STRING,
    birthday: DataTypes.STRING
  },
  { sequelize: db }
)


module.exports = Profile;