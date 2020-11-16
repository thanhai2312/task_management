const express = require("express");
const userController = require("../controllers/jUser.controller");

// console.log(issueTypeController);
let router = new express.Router();
// find all issue type
router.get("/all", userController.findAll);
// find one by id issue type
router.get("/:id", userController.findById);

module.exports = router;
