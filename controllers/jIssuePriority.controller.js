"use strict";

const IssuePriority = require("../models/jIssuePriorities.model");

exports.findAll = (req, res) => {
  issue.findAll((err, issuePriority) => {
    if (err) throw err;
    console.log(issuePriority);
    res.send(issuePriority);
  });
};

exports.create = (req, res) => {
  const new_issuePriority = new IssuePriority(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_issuePriority, (err, issuePriority) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: issuePriority });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, issuePriority) => {
    if (err) res.send(err);
    res.send(issuePriority);
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
      new IssuePriority(req.body),
      (err, issuePriority) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: issuePriority });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, issuePriority) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
