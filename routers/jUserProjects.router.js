const express = require("express");

const userProjectController = require("../controllers/jUserProjects.controller");
// console.log(userController);
let router = new express.Router();

// find one by id issue type
router.get("/:id", userProjectController.findUserByProjectId);

module.exports = router;
