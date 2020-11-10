// const { Sequelize } = require("sequelize/types");
const ProjectCategory = require("./jProjectCategories.model");
const Group = require("./jGroups.model");
const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("Project", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    projectCategoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: ProjectCategory,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    groupId: {
      type: Sequelize.INTEGER,
      references: {
        model: Group,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });
  return Project;
};
