"use strict";

const Project = require("../models/jProjects.model");

exports.findAll = (req, res) => {
  issue.findAll((err, project) => {
    if (err) throw err;
    console.log(project);
    res.send(project);
  });
};

exports.create = (req, res) => {
  const new_project = new Project(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_project, (err, project) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: project });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, project) => {
    if (err) res.send(err);
    res.send(project);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    issue.updateById(
      req.params.id,
      new Project(req.body),
      (err, project) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: project });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, project) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
