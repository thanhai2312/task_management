const express = require("express");
const issueController = require("../controllers/jIssue.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", issueController.create);

// find all issue type
router.get("/", issueController.findAll);

// find one by id issue type
router.get("/:id", issueController.findById);

// find one by id issue type
router.get("/status/:id", issueController.findByStatusId);

// find one by id issue type
router.get("/user/:id", issueController.findByUserId);

// Update a IssueType with id
router.put("/:id", issueController.update);

// Delete a IssueType with id
router.delete("/:id", issueController.delete);

// Delete all issueTypesController
// router.delete("/", issueController.deleteAll);

module.exports = router;
