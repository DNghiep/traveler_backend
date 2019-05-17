var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const userSchema = require("../../model/user.model");
var fs = require("fs");
const userModel = mongoose.model("user", userSchema);
var cur_id;
/* GET home page. */
router.get("/", function(req, res, next) {
  // fs.readFile('user_id.txt', function (err, data) {
  //     if (err) {
  //        return console.error(err);
  //     }
  //     cur_id = data.toString();
  // });
  let cur_id = req.query.u_id;
  userModel.findOne({_id: cur_id}, function(err, accounts) {
    if (err) {
      res.send(err);
    } else {
      res.send(accounts);
    }
  });
});
router.post("/", function(req, res, next) {
  let cur_id = req.query.u_id;
  var new_acc = {
    email: req.body.email,
    password: req.body.password,
    user_name: req.body.user_name,
    address: req.body.address,
    phone: req.body.phone
  };
  userModel.findByIdAndUpdate(cur_id, new_acc, {new: true}, function(err, acc) {
    if (err) res.send(err);
    console.log("Updated");
    res.send("Updated");
  });
});
module.exports = router;
