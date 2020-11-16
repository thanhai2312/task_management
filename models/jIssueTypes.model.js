// "user strict";
var sql = require("../config/db.config");

//Issue type object constructor
var IssueType = function (issueType) {
  console.log(issueType);
  this.type = issueType.type;
};

const tableName = "jissuetypes";

IssueType.createIssueType = (newIssueType, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newIssueType, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

IssueType.findById = (issueTypeId, result) => {
  console.log("thien");
  sql.query(
    `Select * from ${tableName} where id = ?`,
    issueTypeId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("here skssk");
        result(null, res);
      }
    }
  );
};

IssueType.findAll = (result) => {
  sql.query(
    `Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(res);
      console.log("tasks : ", res);
      result(null, res);
    }
  });
};

IssueType.updateById = (id, issueType, result) => {
  sql.query(
    `UPDATE ${tableName} SET type = ? WHERE id = ?`,
    [issueType.type, id],
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

IssueType.remove = function (id, result) {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = IssueType;
