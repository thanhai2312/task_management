"user strict";
let sql = require(".");

//Issue type object constructor
var ProjectCategory = function (projectCategory) {
  console.log(projectCategory);
  this.category = projectCategory.category;
};

const tableName = "JProjectCategories";

ProjectCategory.create = (newProjectCategory, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newProjectCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

ProjectCategory.findById = (projectCategoryId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    projectCategoryId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

ProjectCategory.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("project category : ", res);

      result(null, res);
    }
  });
};

ProjectCategory.updateById = (id, projectCategory, result) => {
  sql.query(
    `UPDATE ${tableName} SET category = ? WHERE id = ?`,
    [projectCategory.category, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

ProjectCategory.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = ProjectCategory;
