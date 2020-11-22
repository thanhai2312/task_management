const express = require("express");
const projectCategoryController = require("../controllers/jProjectCategory.controller");
// console.log(issueTypeController);
let router = new express.Router();
// create new issue type
router.post("/", projectCategoryController.create);

// find all issue type
router.get("/", projectCategoryController.findAll);

// find one by id issue type
router.get("/:id", projectCategoryController.findById);

// Update a IssueType with id
router.put("/:id", projectCategoryController.update);

// Delete a IssueType with id
router.delete("/:id", projectCategoryController.delete);

// Delete all issueTypesController
// router.delete("/", projectCategoryController.deleteAll);

module.exports = router;
