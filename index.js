var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("publics"));
// var { QueryInterface } = require("sequelize/types");
// const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("server running");
});

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// cors
const cors = require("cors");
app.use(cors("http://localhost:3000"));

// db config
const db = require("./models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to task management application." });
});

require("./routers/jIssueTypes.router")(app);


