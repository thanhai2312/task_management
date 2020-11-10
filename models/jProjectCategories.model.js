const { sequelize, Sequelize } = require(".");
const db = require("../config/db");

module.exports = (sequelize, Sequelize) => {
  const ProjectCategory = sequelize.define("ProjectCategory", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    category: {
      type: Sequelize.STRING,
    },
  });
  return ProjectCategory;
};
