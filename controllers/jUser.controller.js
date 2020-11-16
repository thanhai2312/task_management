const IssueType = require("../models/jUsers.model");

exports.findAll = (req, res) => {
  IssueType.findAll((err, issueType) => {
    if (err) throw err;
    console.log(issueType);
    res.send(issueType);
  });
};

exports.findById = (req, res) => {
  IssueType.findById(req.params.id, (err, issueType) => {
    if (err) res.send(err);
    res.json(issueType);
  });
};
