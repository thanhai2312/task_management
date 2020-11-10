// const { Sequelize } = require("sequelize/types");
const IssuePriority = require("./jIssuePriorities.model");
const IssueStatus = require("./jIssueStatus.model");
const IssueType = require("./jIssueTypes.model");
const Project = require("./jProjects.model");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const Issue = sequelize.define("Issue", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    listPosition: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.STRING,
    },
    reporterId: {
      type: Sequelize.BIGINT,
    },
    userIds: [
      {
        type: Sequelize.BIGINT,
      },
    ],
    deadlineAt: {
      type: Sequelize.DATE,
    },
    issueTypeId: {
      type: Sequelize.INTEGER,
      references: {
        model: IssueType,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    issuePriorityId: {
      type: Sequelize.INTEGER,
      references: {
        model: IssuePriority,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    issueStatusId: {
      type: Sequelize.INTEGER,
      references: {
        model: IssueStatus,
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
  return Issue;
};
