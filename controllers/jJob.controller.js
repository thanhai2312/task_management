"use strict";

const Job = require("../models/jJobs.model");

exports.findAll = (req, res) => {
  issue.findAll((err, job) => {
    if (err) throw err;
    console.log(job);
    res.send(job);
  });
};

exports.create = (req, res) => {
  const new_job = new Job(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_job, (err, job) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: job });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, job) => {
    if (err) res.send(err);
    res.send(job);
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
      new Job(req.body),
      (err, job) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: job });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, job) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
