var con = require("./connection.js");

var orm = {
selectAll: function(tableName){
    var queryString = "SELECT bugger_name,id FROM ?? WHERE devoured = false";
    con.query(queryString,[tableName],function(err,result){
        if (err) throw err;
        console.log(result);
    })
},
insertOne: function(burgerName){
    var queryString = "INSERT INTO burgers (burger_name,devoured) VALUES (?, false)";
    con.query(queryString,[burgerName],function(err,result){
        if (err) throw err;
        console.log(result)
    })
},
updateOne: function(burgerId){
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ??";
    con.query(queryString,[burgerId],function(err,result){
        if (err) throw err;
        console.log(result);
    });
}
}

module.exports = orm;