//Require the mysql con 
var con = require("./connection.js");

//Defines the ORM obj with methods
var orm = {
//Selects all burgers that haven't been devoured
selectAll: function(tableName,cb){
    var queryString = "SELECT * FROM ??";
    con.query(queryString,[tableName],function(err,result){
        if (err) throw err;
        console.log(result);
        cb(result);
    })
},
//Inserts a new burger into the db
insertOne: function(burgerName,cb){
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?, false)";
    console.log(burgerName,"here is the burger name");
    con.query(queryString,[burgerName],function(err,result){
        if (err) throw err;
        console.log(result);
        cb(result);
    })
    
},
//Updates a burger to devoured
updateOne: function(burgerId,cb){
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    con.query(queryString,[burgerId],function(err,result){
        if (err) throw err;
        console.log(result);
        cb(result);
    });
    
}
}

//Exports it to the model
module.exports = orm;