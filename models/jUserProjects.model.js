// const { Sequelize } = require("sequelize/types");
const User = require("./jUsers.model");
const Project = require("./jProjects.model");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const UserProject = sequelize.define("UserProject", {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
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
  return UserProject;
};
