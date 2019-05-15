var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const userSchema = require("../../model/user.model");

const userModel = mongoose.model("user", userSchema);
/* GET home page. */
router.get("/", function(req, res, next) {
  userModel.find({}, function(err, account) {
    if (err) {
      res.send(err);
    } else {
      res.send(account);
    }
  });
});

router.post("/", function (req, res, next) {
	//console.log(req.body);
	userModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
		if(data){
				res.send(data._id);
		}else{
			res.send("Login Fail");
		}
	});
});
module.exports = router;
