//Require Mysql
var mysql = require("mysql");
var con;
if (process.env.JAWSDB_URL){
  con = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
//Define the connection variable
var con = mysql.createConnection({
    host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "pi57hjicqsf9pu7k",
    password: "s8sfm3adixdxyevi",
    database: "du6nq577gtdgp2ir"
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

