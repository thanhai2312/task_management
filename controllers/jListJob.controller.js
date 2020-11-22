"use strict";

const ListJob = require("../models/jListJobs.model");

exports.findAll = (req, res) => {
  issue.findAll((err, listJob) => {
    if (err) throw err;
    console.log(listJob);
    res.send(listJob);
  });
};

exports.create = (req, res) => {
  const new_listJob = new ListJob(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "dien tat ca cac truong" });
  } else {
    issue.createIssue(new_listJob, (err, listJob) => {
      if (err) res.send(err);
      res.send({ error: false, message: "successfully", data: listJob });
    });
  }
};

exports.findById = (req, res) => {
  issue.findById(req.params.id, (err, listJob) => {
    if (err) res.send(err);
    res.send(listJob);
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
      new ListJob(req.body),
      (err, listJob) => {
        if (err) res.send(err);
        res.json({ error: false, message: "updated successfully", data: listJob });
      }
    );
  }
};

exports.delete = (req, res) => {
  issue.delete(req.params.id, (err, listJob) => {
    if (err) res.send(err);
    res.json({ error: false, message: "deleted successfully" });
  });
};
