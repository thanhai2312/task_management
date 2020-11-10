const dbConfig = require("../config/db.config");
// const { QueryInterface } = require("sequelize/types");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.issueTypes = require ("./jIssueTypes.model")(sequelize, Sequelize);
// db.issueStatus = require ("./jIssueStatus.model")(sequelize, Sequelize);
// db.issuePriorities = require ("./jIssuePriorities.model")(sequelize, Sequelize);
// db.issues = require("./jIssues.model")(sequelize, Sequelize);

// db.users = require("./jUsers.model")(sequelize, Sequelize);
// db.userProjects = require("./jUserProjects.model")(sequelize, Sequelize);

// db.comments=require("./jComments.model")(sequelize, Sequelize);

// db.groups = require("./jGroups.model")(sequelize, sequelize);

// db.projects=require("./jProjects.model")(sequelize, Sequelize);
// db.projectCategories=require("./jProjectCategories.model")(sequelize, Sequelize);

module.exports = db;
