"use strict";

const userProject = require("../models/jUserProjects.model");

exports.findUserByProjectId = (req, res) => {
  userProject.findUserByProjectId(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.findByUserId = (req, res) => {
  userProject.findByUserId(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create = (req, res) => {
  const new_user_project = new userProject(req.body);

  if (!req.body) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    console.log(req.body)
    userProject.create(new_user_project, (err, user) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: user });
    });
  }
};