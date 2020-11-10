// const { Sequelize } = require("sequelize/types");
const Issue = require("./jIssues.model");
const User = require("./jUsers.model");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("Comment", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    body: {
      type: Sequelize.STRING,
    },
    issueId: {
      type: Sequelize.INTEGER,
      references: {
        model: Issue,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });
  return Comment;
};
