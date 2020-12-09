var sql = require(".");

//Issue type object constructor
var User = function (user) {
  console.log(user);
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
  this.description = user.description;
  this.avatarUrl = user.avatarUrl;
  this.password = user.password;
  this.createdAt = user.createAt;
  this.updatedAt = user.updatedAt;
  this.projectAdmin = user.projectAdmin;

};

const tableName = "JUsers";

User.create = (newUser, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, {id:res.insertId, ...newUser});
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

User.login = (email, password, result) => {
  sql.query(
    `Select id from ${tableName} where email = ? and password = ?`,
    [email, password],
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

User.findIdByEmail = (email, result) => {
  sql.query(
    `Select id from ${tableName} where email = ?`,
    email,
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
    `UPDATE ${tableName} SET name = ?, updatedAt = ?, email = ?, description = ?, avatarUrl = ? WHERE id = ?`,
    [user.name, user.updatedAt, user.email, user.description, user.avatarUrl, id],
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

User.updatePassword = (id, user, result) => {
  sql.query(
    `UPDATE ${tableName} SET password = ? WHERE id = ?`,
    [user.password, id],
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

User.updateAdminProjects = (id, project_admin, result) => {
  sql.query(
    `UPDATE ${tableName} SET projectAdmin = ? WHERE id = ?`,
    [project_admin, id],
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
