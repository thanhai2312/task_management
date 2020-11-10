// const { Sequelize } = require("sequelize/types");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const IssuePriority = sequelize.define("IssuePriority", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
    priority: {
      type: Sequelize.STRING,
      alowNull: false
    },
    
  });
  return IssuePriority;
};
