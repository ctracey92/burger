var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

//Get all the burgers
router.get("/",function(req,res){
    burger.all(function(data){
        var burgerObject = {
            burgers: data
        };
    console.log(burgerObject);  
    });
    res.render('index',burgerObject);
});

//Add a new burger
router.post("/api/burgers",function(req,res){
    burger.insertOne([
        "name"
    ],
    [
        req.body.name
    ],
    function(result){
        res.json({id: result.insertId});
    });
});

//Change the devoured status
router.put("/api/burgers/:id",function(req,res){
    var burgerId = req.params.id;

    burger.updateOne(
        burgerId,function(result){
            if (result.changedRows == 0){
                //If no changes were made 404
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        }
    )
})




module.exports = router;