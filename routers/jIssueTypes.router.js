const express = require("express");
const issueTypeController = require("../controllers/jIssueTypes.controller");

let router = express.Router();
// create new issue type
router.post("/", issueTypeController.create);

// find all issue type
router.get("/", issueTypeController.findAll);

// find one by id issue type
router.get("/:id", issueTypeController.findById);

// Update a IssueType with id
router.put("/:id", issueTypeController.update);

// Delete a IssueType with id
router.delete("/:id", issueTypeController.delete);

// Delete all issueTypesController
router.delete("/", issueTypeController.deleteAll);

module.exports = router;