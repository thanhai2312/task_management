"user strict";
let sql = require(".");

//Issue type object constructor
var Project = function (project) {
  console.log(projectCategory);
  this.name = project.name;
  this.description = project.description;
  this.createAt = project.createAt;
  this.updateAt = project.updateAt;
  this.projectCategoryId = project.projectCategoryId;
  this.groupId = project.groupId;
};

const tableName = "jProject";

Project.create = (newProject, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newProject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Project.findById = (projectId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    projectId,
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

Project.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("project : ", res);

      result(null, res);
    }
  });
};

Project.updateById = (id, project, result) => {
  sql.query(
    `UPDATE ${tableName} SET name = ?, description = ?, updateAt = ?, projectCategoryId = ?, groupId = ? WHERE id = ?`,
    [project.name, project.description, project.updateAt, project.projectCategoryId, project.groupId, id],
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

Project.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Project;
