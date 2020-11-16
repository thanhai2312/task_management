var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'task_management'
});
// connect to database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;

// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "task_management"
// };
