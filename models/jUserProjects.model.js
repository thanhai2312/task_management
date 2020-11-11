"user strict";
let sql = require(".");

//Issue type object constructor
var UserProject = function (userProject) {
  console.log(projectCategory);
  this.userId = userProject.userId;
  this.projectId = userProject.projectId;

};

const tableName = "JUserProject";

UserProject.create = (newUserProject, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newUserProject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

UserProject.findAll = (result) => {
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
// UserProject.updateById = (id, projectCategory, result) => {
//   sql.query(
//     `UPDATE ${tableName} SET category = ? WHERE id = ?`,
//     [projectCategory.category, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };
// UserProject.remove = (id, result) => {
//   sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     } else {
//       result(null, res);
//     }
//   });
// };

module.exports = ProjectCategory;
