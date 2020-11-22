"use strict";

const Issue = require("../models/jIssues.model");

exports.findAll = (req, res) => {
  issue.findAll((err, issue) => {
    if (err) throw err;
    console.log(issue);
    res.send(issue);
  });
};

exports.create = (req, res) => {
  const new_issue = new Issue(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_issue, (err, issue) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: issue });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, issue) => {
    if (err) res.send(err);
    res.send(issue);
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
      new Issue(req.body),
      (err, issue) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully" });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, issue) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
