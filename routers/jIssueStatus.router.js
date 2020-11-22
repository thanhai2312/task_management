const express = require("express");
const issueStatusController = require("../controllers/jIssueStatus.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", issueStatusController.create);

// find all issue type
router.get("/", issueStatusController.findAll);

// find one by id issue type
router.get("/:id", issueStatusController.findById);

// Update a IssueType with id
router.put("/:id", issueStatusController.update);

// Delete a IssueType with id
router.delete("/:id", issueStatusController.delete);

// Delete all issueTypesController
// router.delete("/", issueStatusController.deleteAll);

module.exports = router;
