const express = require("express");
const issuePriorityController = require("../controllers/jIssuePriority.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", issuePriorityController.create);

// find all issue type
router.get("/", issuePriorityController.findAll);

// find one by id issue type
router.get("/:id", issuePriorityController.findById);

// Update a IssueType with id
router.put("/:id", issuePriorityController.update);

// Delete a IssueType with id
router.delete("/:id", issuePriorityController.delete);

// Delete all issueTypesController
// router.delete("/", issuePriorityController.deleteAll);

module.exports = router;
