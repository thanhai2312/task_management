const express = require("express");
const jobController = require("../controllers/jJob.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", jobController.create);

// find all issue type
router.get("/", jobController.findAll);

// find one by id issue type
router.get("/:id", jobController.findById);

// find one by id issue type
router.get("/list-job/:id", jobController.findJobByLisJobId);

// find one by id issue type
router.get("/finish/:id", jobController.findJobFinish);

// Update a IssueType with id
router.put("/:id", jobController.update);

// Delete a IssueType with id
router.delete("/:id", jobController.delete);

// Delete all issueTypesController
// router.delete("/", jobController.deleteAll);

module.exports = router;
