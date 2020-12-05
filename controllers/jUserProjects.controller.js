"use strict";

const userProject = require("../models/jUserProjects.model");

exports.findUserByProjectId = (req, res) => {
  userProject.findUserByProjectId(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};
