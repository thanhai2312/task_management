"user strict";
let sql = require(".");

//Issue type object constructor
var Comment = function (comment) {
  console.log(comment);
  this.body = comment.body;
  this.createAt = comment.createAt;
  this.updateAt = comment.updateAt;
  this.userId = comment.userId;
  this.issueId = comment.issueId
};

const tableName = "jComment";

Comment.create = (newComment, result) => {
  sql.query(`INSERT INTO ${tableName} set ?`, newComment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Comment.findById = (commentId, result) => {
  sql.query(
    `Select * from ${tableName} where id = ?`,
    commentId,
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

Comment.findAll = (result) => {
  sql.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("comment : ", res);

      result(null, res);
    }
  });
};

Comment.updateById = (id, comment, result) => {
  sql.query(
    `UPDATE ${tableName} SET body = ?, updateAt = ?, userId = ?, issueId = ? WHERE id = ?`,
    [comment.body, comment.userId, comment.updateAt, comment.issueId, id],
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

Comment.remove = (id, result) => {
  sql.query(`DELETE FROM ${tableName} WHERE id = ?`, [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Comment;
