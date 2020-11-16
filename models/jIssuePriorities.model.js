"user strict";
let sql = require(".");

//Issue type object constructor
var IssuePriority = function (issuePriority) {
  console.log(issuePriority);
  this.priority = issuePriority.priority;
};

const tableName = "jIssuePriorities";

IssuePriority.create = (newIssuePriority, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newIssuePriority, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

IssuePriority.findById = (issuePriorityId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    issuePriorityId,
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

IssuePriority.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("issue priority : ", res);
      result(null, res);
    }
  });
};

IssuePriority.updateById = (id, issuePriority, result) => {
  sql.query(
    `UPDATE ${tableName} SET priority = ? WHERE id = ?`,
    [issuePriority.priority, id],
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

IssuePriority.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = IssuePriority;
