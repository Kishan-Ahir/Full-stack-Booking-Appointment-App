const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("app", "root", "Chandravadiya@2003", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phonenumber: {
    type: DataTypes.STRING,
  },
});

module.exports = User;