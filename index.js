var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("publics"));

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to task management application." });
});

const issueTypeRouter = require("./routers/jIssueTypes.router");
const issuePriorityRouter = require("./routers/jIssuePriority.router");
const issueStatusRouter = require("./routers/jIssueStatus.router");
const jobRouter = require("./routers/jJob.router");
const listJobRouter = require("./routers/jListJob.router");
const projectRouter = require("./routers/jProject.router");
const projectCategoryRouter = require("./routers/jProjectCategory.router");
const userRouter = require("./routers/jUser.router");
const issueRouter = require("./routers/jIssue.router");

app.use("/api/v1/issue-type", issueTypeRouter);
app.use('/api/v1/user', userRouter)
app.use('/api/v1/issue', issueRouter)
app.use('/api/v1/issue-priority', issuePriorityRouter)
app.use('/api/v1/issue-status', issueStatusRouter)
app.use('/api/v1/job', jobRouter)
app.use('/api/v1/list-job', listJobRouter)
app.use('/api/v1/project', projectRouter)
app.use('/api/v1/project-category', projectCategoryRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running");
});
