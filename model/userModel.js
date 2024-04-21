module.exports = (sequelize, DataTypes) => { //arrow function, two parameter passed
    const User = sequelize.define("user", { //if here singular user is defined, in db users plural table is formed
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      photo:{
        type : DataTypes.STRING,
        allowNull : true
      }
    });
    return User;
  };