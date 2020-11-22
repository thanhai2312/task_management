"user strict";
let sql = require(".");

//Issue type object constructor
var Job = function (job) {
  console.log(job);
  this.name = job.name;
  this.finish = job.finish;
  this.userIds = job.userIds;
  this.deadlineAt = new Date();
  this.listJobId = job.listJobId;
};

const tableName = "jjobs";

Job.create = (newJob, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newJob, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Job.findById = (jobId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    jobId,
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

Job.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("job status : ", res);
      result(null, res);
    }
  });
};

Job.updateById = (id, job, result) => {
  sql.query(
    `UPDATE ${tableName} SET name = ?, finish = ?, userIds = ?, deadlineAt = ?, listJobId = ? WHERE id = ?`,
    [job.name, job.finish, job.userIds, job.deadlineAt, job.listJobId, id],
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

Job.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Job;
