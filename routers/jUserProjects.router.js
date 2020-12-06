const express = require("express");

const userProjectController = require("../controllers/jUserProjects.controller");
// console.log(userController);
let router = new express.Router();

// find one by id issue type
router.get("/:id", userProjectController.findUserByProjectId);

// find by id userId
router.get("/info/:id", userProjectController.findByUserId);

// new userProject
router.post("/", userProjectController.create);

module.exports = router;
