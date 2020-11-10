const db = require("../models");
const IssueType = db.issueTypes;
const Op = db.Sequelize.Op;
// const { QueryInterface } = require("sequelize/types");



exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content not empty!",
    });
    return;
  }
  const issueType = {
    name: req.body.name,
  };

  IssueType.create(issueType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error create Issue Type",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  IssueType.findAll({
    where: {
      name: {
        [Op.not]: null,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error for find issue type",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  IssueType.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error for find id issue type",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  IssueType.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "updated success" });
      } else {
        res.send({
          message: `cannot update id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error update",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  IssueType.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "deleted successfully" });
      } else {
        res.send({
          message: `cannot delete id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error delete",
      });
    });
};

exports.deleteAll = (req, res) => {
  IssueType.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} types was deleted successfully` });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error delete",
      });
    });
};
