const express = require("express");

const userController = require("../controllers/jUser.controller");
// console.log(userController);
let router = new express.Router();
// create new issue type
router.post("/", userController.create);

// find all issue type
router.get("/", userController.findAll);

// find one by id issue type
router.get("/email/:email", userController.findIdByEmail);

// find id by email
router.get("/:id", userController.findById);

// find id by email
router.get("/:email/:password", userController.login);

// Update a IssueType with id
router.put("/:id", userController.update);

// Update a IssueType with id
router.put("/password/:id", userController.updatePassword);

// updateAdminProjects with id
router.put("/update_admin_projects/:id", userController.updateAdminProjects);

// Delete a IssueType with id
router.delete("/:id", userController.delete);

// // Delete all issueTypesController
// router.delete("/", userController.deleteAll);

module.exports = router;
