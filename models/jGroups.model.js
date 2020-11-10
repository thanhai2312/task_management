// const { Sequelize } = require("sequelize/types");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define("Group", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING
    },
    userIds: [{
        type: Sequelize.BIGINT
    }]
  });
  return Group;
};
