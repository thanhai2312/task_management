// const { Sequelize } = require("sequelize/types");
const Project = require("./jProjects.model");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const IssueStatus = sequelize.define("IssueStatus", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    position: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    projectId: {
      type: Sequelize.INTEGER,
      references: {
        model: Project,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });
  return IssueStatus;
};
