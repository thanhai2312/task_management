// const { DataTypes } = require("sequelize/types");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db.config");
// const { where } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const IssueType = sequelize.define("issueType", {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true,
    // },
    name: {
      type: Sequelize.STRING,
      alowNull: false,
    },
  });
  return IssueType;
};
