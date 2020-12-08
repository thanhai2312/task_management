"user strict";
let sql = require(".");

//Issue type object constructor
var Issue = function (issue)  {
  console.log(issue);
  this.id = issue.id;
  this.title = issue.title;
  this.listPosition = issue.listPosition;
  this.description = issue.description;
  this.reporterId = issue.reporterId;
  this.userIds = issue.userIds;
  this.deadlineAt = issue.deadlineAt;
  this.createdAt = issue.createdAt;
  this.updatedAt = issue.updatedAt;
  this.issueTypeId = issue.issueTypeId;
  this.issueStatusId = issue.issueStatusId;
  this.issuePriorityId = issue.issuePriorityId;
};

const tableName = "jissues";

Issue.create = (newIssue, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newIssue, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Issue.findById = (issueId, result) => {
  sql.query(`Select * from ${tableName} where id = ?`, issueId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Issue.findByUserId = (userId, result) => {
  sql.query(`Select * from ${tableName} where userIds like ?`, userId + '%', (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Issue.findByStatusId = (statusId, result) => {
  sql.query(`Select * from ${tableName} where issueStatusId = ?`, statusId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Issue.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("issue : ", res);

      result(null, res);
    }
  });
};
Issue.updateById = (id, issue, result) => {
  sql.query(
    `UPDATE ${tableName} SET title = ?, listPosition = ?, description = ?, reporterId = ?, userIds = ?, deadlineAt = ?, updatedAt = ?, issueTypeId = ?, issueStatusId = ?, issuePriorityId = ?  WHERE id = ?`,
    [
      issue.title,
      issue.listPosition,
      issue.description,
      issue.deadlineAt,
      issue.updatedAt,
      issue.reporterId,
      issue.userIds,
      issue.issueTypeId,
      issue.issueStatusId,
      issue.issuePriorityId,
      id,
    ],
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
Issue.delete = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Issue;
