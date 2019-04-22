var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "h0usTon1",
    database: "burgers_db"
})

con.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});

module.exports = con;

