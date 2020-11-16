var sql = require("../config/db.config");

//Issue type object constructor
var User = function (user) {
  console.log(user);
  this.name = user.name;
  this.email = user.email;
  this.description = user.description;
  this.avatarUrl = user.avatarUrl;
  this.createAt = user.createAt
  this.updateAt = user.updateAt

};

const tableName = "jusers";

User.create = (newUser, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

User.findById = (userId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    userId,
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

User.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("user : ", res);

      result(null, res);
    }
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    `UPDATE ${tableName} SET name = ?, updateAt = ?, email = ?, description = ?, avatarUrl = ? WHERE id = ?`,
    [user.name, user.email, user.description, user.avatarUrl, user.updateAt, id],
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

User.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
