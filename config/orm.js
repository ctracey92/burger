//Require the mysql con 
var con = require("./connection.js");

//Defines the ORM obj with methods
var orm = {
//Selects all burgers that haven't been devoured
selectAll: function(tableName){
    var queryString = "SELECT bugger_name,id FROM ?? WHERE devoured = false";
    con.query(queryString,[tableName],function(err,result){
        if (err) throw err;
        console.log(result);
    })
},
//Inserts a new burger into the db
insertOne: function(burgerName){
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?, false)";
    con.query(queryString,[burgerName],function(err,result){
        if (err) throw err;
        console.log(result)
    })
},
//Updates a burger to devoured
updateOne: function(burgerId){
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ??";
    con.query(queryString,[burgerId],function(err,result){
        if (err) throw err;
        console.log(result);
    });
}
}

//Exports it to the model
module.exports = orm;