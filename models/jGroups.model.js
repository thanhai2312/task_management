"user strict";
let sql = require(".");

//Issue type object constructor
var Group = function (group) {
  console.log(group);
  this.name = group.name;
  this.description = group.description;
  this.createAt = group.createAt;
  this.updateAt = group.updateAt;
  this.userIds = group.userIds;
};

const tableName = "jGroup";

Group.create = (newGroup, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newGroup, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Group.findById = (groupId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    groupId,
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
Group.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("group : ", res);

      result(null, res);
    }
  });
};
Group.updateById = (id, group, result) => {
  sql.query(
    `UPDATE ${tableName} SET name = ?, description = ?, updateAt = ?, userIds = ? WHERE id = ?`,
    [group.name, group.description, group.updateAt, group.userIds, id],
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
Group.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Group;
