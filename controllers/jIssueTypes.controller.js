"use strict";

const IssueType = require("../models/jIssueTypes.model");

exports.findAll = (req, res) => {
  IssueType.findAll((err, issueType) => {
    if (err) throw err;
    console.log(issueType);
    res.send(issueType);
  });
};

exports.create = (req, res) => {
  const new_issueType = new IssueType(req.body);

  if (!req.body) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    console.log(req.body)
    IssueType.create(new_issueType, (err, issueType) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: issueType });
    });
  }
};

exports.findById = (req, res) => {
  IssueType.findById(req.params.id, (err, issueType) => {
    if (err) res.send(err);
    res.json(issueType);
  });
};

exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    IssueType.updateById(
      req.params.id,
      new IssueType(req.body),
      (err, issueType) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully" });
      }
    );
  }
};

exports.delete = (req, res) => {
  IssueType.delete(req.params.id, (err, issueType) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
