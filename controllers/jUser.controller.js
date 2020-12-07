"use strict";

const user = require("../models/jUsers.model");

exports.findAll = (req, res) => {
  user.findAll((err, issueType) => {
    if (err) throw err;
    console.log(issueType);
    res.send(issueType);
  });
};

exports.create = (req, res) => {
  const new_user = new user(req.body);

  if (!req.body) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    console.log(req.body)
    user.create(new_user, (err, user) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: user });
    });
  }
};

exports.findById = (req, res) => {
  user.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.login = (req, res) => {
  user.login(req.params.email, req.params.password, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findIdByEmail = (req, res) => {
  user.findIdByEmail(req.params.email, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    user.updateById(
      req.params.id,
      new user(req.body),
      (err, issueType) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully" });
      }
    );
  }
};

exports.updateAdminProjects = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    user.updateAdminProjects(
      req.params.id,
      req.body.projectAdmins,
      (err, issueType) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully" });
      }
    );
  }
};

exports.delete = (req, res) => {
  user.delete(req.params.id, (err, issueType) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
