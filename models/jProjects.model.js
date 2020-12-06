"user strict";
let sql = require(".");

//Issue type object constructor
var Project = function (project) {
  console.log(project);
  this.id = project.id;
  this.name = project.name;
  this.description = project.description;
  this.projectCategoriesId = project.projectCategoriesId;
  this.createdAt = project.createdAt;
  this.updatedAt = project.updatedAt;
};

const tableName = "jProjects";

Project.create = (newProject, result) => {
  console.log(newProject);
  sql.query(`INSERT INTO ${tableName} (id, name, description, projectCategoriesId, createdAt, updatedAt) VALUES (?,?,?,?,?,?)`,
    [newProject.id, newProject.name, newProject.description, newProject.projectCategoriesId, newProject.createdAt, newProject.updatedAt], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, newProject.id);
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

Project.findIdByName = (name, result) => {
  sql.query(
    `Select id from ${tableName} where name = ?`,
    name,
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
  sql.query(`Select id from ${tableName}`, (err, res) => {
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
