"use strict";

const ProjectCategory = require("../models/jProjectCategories.model");

exports.findAll = (req, res) => {
  ProjectCategory.findAll((err, projectCategory) => {
    if (err) throw err;
    console.log(projectCategory);
    res.send(projectCategory);
  });
};

exports.create = (req, res) => {
  const new_projectCategory = new ProjectCategory(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    ProjectCategory.createIssue(new_projectCategory, (err, projectCategory) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: projectCategory });
    });
  }
};

exports.findById = (req, res) => {
  ProjectCategory.findById(req.params.id, (err, projectCategory) => {
    if (err) res.send(err);
    res.send(projectCategory);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    ProjectCategory.updateById(
      req.params.id,
      new ProjectCategory(req.body),
      (err, projectCategory) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: projectCategory });
      }
    );
  }
};

exports.delete = (req, res) => {
  ProjectCategory.delete(req.params.id, (err, projectCategory) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
