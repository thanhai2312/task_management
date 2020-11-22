const express = require("express");
const listJobController = require("../controllers/jListJob.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", listJobController.create);

// find all issue type
router.get("/", listJobController.findAll);

// find one by id issue type
router.get("/:id", listJobController.findById);

// Update a IssueType with id
router.put("/:id", listJobController.update);

// Delete a IssueType with id
router.delete("/:id", listJobController.delete);

// Delete all issueTypesController
// router.delete("/", listJobController.deleteAll);

module.exports = router;
