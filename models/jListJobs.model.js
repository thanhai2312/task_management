"user strict";
let sql = require(".");

//Issue type object constructor
var ListJob = function (listJob) {
  this.id = listJob.id;
  this.name = listJob.name;
  this.issueId = listJob.issueId;
  
};

const tableName = "jlistJobs";

ListJob.create = (newListJob, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newListJob, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

ListJob.findById = (listJobId, result) => {
  sql.query(
    `Select issueId from ${tableName} where id = ?`,
    listJobId,
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

ListJob.findListJobByIdIssue = (issueId, result) => {
  sql.query(
    `Select * from ${tableName} where issueId = ?`,
    issueId,
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

ListJob.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("listJob status : ", res);
      result(null, res);
    }
  });
};

ListJob.findAllId = (result) => {
  sql.query(`Select id from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("listJob status : ", res);
      result(null, res);
    }
  });
};

ListJob.updateById = (id, listJob, result) => {
  sql.query(
    `UPDATE ${tableName} SET name = ?, issueId = ? WHERE id = ?`,
    [listJob.name, listJob.issueId, id],
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

ListJob.delete = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = ListJob;
