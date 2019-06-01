var express = require("express");
var router = express.Router();

const mail = require('../mail/index');

const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const userSchema = require("../../model/user.model");

const userModel = mongoose.model("user", userSchema);
/* GET home page. */
router.get("/", function(req, res, next) {
  userModel.find({}, function(err, accounts) {
    if (err) {
      res.send(err);
    } else {
      res.send(accounts);
    }
  });
});

router.post("/", function(req, res, next) {
  var new_acc = {
    email: req.body.email,
    password: req.body.password,
    user_name: req.body.user_name
  };

  userModel.findOne({ email: new_acc.email }, function(err, ex_acc) {
    if (err) res.send(err);
    else {
      if (ex_acc) {
        res.send("Email already in used");
      } else {
        /*
        const hash = crypto.createHash('sha256');
        hash.update(new_acc.email + new_acc.password);
        */
        var user_id = mongoose.Types.ObjectId();
        const newAcc = new userModel({
          _id: user_id,
          email: new_acc.email,
          password: new_acc.password,
          user_name: new_acc.user_name
        });
        userModel.create(newAcc, (err, acc) => {
          if (err) {
            res.send(err);
          } else {
            console.log("User created");
            res.send("User created");
            mail.sendNewAccountEmail(user_id);
          }
        });
      }
    }
  });
});

module.exports = router;
