// const { Sequelize } = require("sequelize/types");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    avatarUrl: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
