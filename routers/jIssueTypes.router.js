
module.exports = issueTypeRouter => {
  const issueTypes = require("../controllers/jIssueTypes.controller");
  
  let router = require("express").Router();
  // create new issue type
  router.post("/", issueTypes.create);

  // find all issue type
  router.get("/", issueTypes.findAll);

  // find one by id issue type
  router.get("/:id", issueTypes.findOne);

  // Update a IssueType with id
  router.put("/:id", issueTypes.update);

  // Delete a IssueType with id
  router.delete("/:id", issueTypes.delete);

  // Delete all IssueTypes
  router.delete("/", issueTypes.deleteAll);

  issueTypeRouter.use("/api/issueTypes", router);
};
