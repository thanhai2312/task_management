"use strict";

const IssueStatus = require("../models/jIssuePriorities.model");

exports.findAll = (req, res) => {
  issue.findAll((err, issueStatus) => {
    if (err) throw err;
    console.log(issueStatus);
    res.send(issueStatus);
  });
};

exports.create = (req, res) => {
  const new_issueStatus = new IssueStatus(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_issueStatus, (err, issueStatus) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: issueStatus });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, issueStatus) => {
    if (err) res.send(err);
    res.send(issueStatus);
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
      new IssueStatus(req.body),
      (err, issueStatus) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: issueStatus });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, issueStatus) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
