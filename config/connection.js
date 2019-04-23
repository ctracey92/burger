//Require Mysql
var mysql = require("mysql");
var con;
if (process.env.JAWSDB_URL){
  con = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
//Define the connection variable
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "h0usTon1",
    database: "burgers_db"
});  
};



//Create the connection
con.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + con.threadId);
});

//Export it to ORM
module.exports = con;

