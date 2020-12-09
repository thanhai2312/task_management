"user strict";
let sql = require(".");

//Issue type object constructor
var Job = function (job) {
  console.log(job);
  this.name = job.name;
  this.finish = job.finish;
  this.userIds = job.userIds;
  this.deadlineAt =job.deadlineAt;
  this.listJobId = job.listJobId;
  this.description = job.description;
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

Job.findJobByLisJobId = (listJobId, result) => {
  sql.query(
    `Select * from ${tableName} where listJobId = ?`,
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

Job.findJobFinish = (listJobId, result) => {
  sql.query(
    `Select * from ${tableName} where listJobId = ? and finish = true`,
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
    `UPDATE ${tableName} SET name = ?, finish = ?, userIds = ?, deadlineAt = ?, listJobId = ?, description = ? WHERE id = ?`,
    [job.name, job.finish, job.userIds, job.deadlineAt, job.listJobId, job.description, id],
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

Job.delete = (id, result) => {
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
