var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const userSchema = require("../../model/user.model");
var fs = require("fs");
const userModel = mongoose.model("user", userSchema);

const crypto = require('crypto');

/* GET home page. */
router.get("/", function(req, res, next) {
  fs.readFile('user_id.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      res.send("Logined ID is" + data.toString());
   });
});

router.post("/", function (req, res, next) {
	//console.log(req.body);
	userModel.findOne({email:req.body.email,password:req.body.password},function(err,data){
		if (data) {
      const hash = crypto.createHash('sha256');
      hash.update(req.body.email + req.body.password);
      var result = hash.digest('hex');
      if (result === data.password) {
        res.send(data._id);
        fs.writeFile('user_id.txt', data._id, function(err) {
          if (err) {
            return console.error(err);
          }
        });
      } else {
        res.send("Invalid email or password.");
      }
		} else {
			res.send("Login Fail");
		}
	});
});
module.exports = router;
