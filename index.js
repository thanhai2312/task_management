var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("publics"));

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to task management application." });
});

const issueTypeRouter = require("./routers/jIssueTypes.router")
const userRouter = require("./routers/jUser.router")
const groupsRouter = require("./routers/jGroups.router")

app.use('/api/issue-type', issueTypeRouter)
app.use('/api/user', userRouter)
app.use('/api/group', groupsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running");
});
