const express = require("express");
const projectController = require("../controllers/jProject.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", projectController.create);

// find all issue type
router.get("/", projectController.findAll);

// find one by id issue type
router.get("/:id", projectController.findById);

// find one by id issue type
router.get("/name/:name", projectController.findIdByName);

// Update a IssueType with id
router.put("/:id", projectController.update);

// Delete a IssueType with id
router.delete("/:id", projectController.delete);

// Delete all issueTypesController
// router.delete("/", projectController.deleteAll);

module.exports = router;
