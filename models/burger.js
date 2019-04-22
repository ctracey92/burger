var orm = require("../config/orm.js");

var burgers = {
    all: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    insert: function(buggerName,cb){
        orm.insertOne(buggerName,function(res){
            cb(res);
        })
    },
    update: function(burgerId,cb){
        orm.updateOne(burgerId, function(res){
            cb(res);
        })
    }
}

module.exports = burgers;