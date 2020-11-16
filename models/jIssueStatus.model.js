"user strict";
let sql = require(".");

//Issue type object constructor
var IssueStatus = function (issueStatus) {
  console.log(issueStatus);
  this.position = issueStatus.position;
  this.status = issueStatus.status;
  this.projectId = issueStatus.id;
};

const tableName = "jIssueStatus";

IssueStatus.create = (newIssueStatus, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newIssueStatus, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

IssueStatus.findById = (issueStatusId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    issueStatusId,
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

IssueStatus.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("issue status : ", res);
      result(null, res);
    }
  });
};

IssueStatus.updateById = (id, issueStatus, result) => {
  sql.query(
    `UPDATE ${tableName} SET position = ?, status = ?, projectId = ? WHERE id = ?`,
    [issueStatus.position, issueStatus.status, issueStatus.projectId, id],
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

IssueStatus.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = IssueStatus;
