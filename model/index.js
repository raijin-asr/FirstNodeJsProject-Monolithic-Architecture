const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize"); //sequelize used for ORM, DataTypes and Sequelize are tools of sequelize installed

// connecting with db in config
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { //instantiation
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate() //if connected else error
  .then(() => {
    console.log("CONNECTED!!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {}; //db object

db.blogs = require('./blogModel')(sequelize,DataTypes) //importing blogModel
db.users = require('./userModel')(sequelize,DataTypes) //calling arrow function

db.Sequelize = Sequelize; //class with capital S
db.sequelize = sequelize; //object with lower case s
db.sequelize.sync({ force: false}).then(() => { //for migration purpose
  console.log("YES, re-sync done");
});

module.exports = db;