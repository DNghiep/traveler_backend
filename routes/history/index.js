var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const ticketSchema = require("../../model/ticket.model");

//const userModel = mongoose.model('user', userSchema);
const ticketModel = mongoose.model("ticket", ticketSchema);

/* GET home page. */
router.get("/", function(req, res, next) {
  let owner_id = req.query.owner_id;
  //let owner_id = "5cda63ab39995314a3fbdd6d"
  console.log(owner_id)
  //Query
  query = { owner_id: owner_id };
  ticketModel.find(query, (err, tickets) => {
    if (err) {
      res.send(err);
    } else {
      res.json(tickets);
    }
  });
});
router.get("/all", function(req, res, next) {
  let owner_id = req.query.owner_id;
  //Query
  //query = { onwer_id: onwer_id };
  ticketModel.find({}, (err, tickets) => {
    if (err) {
      res.send(err);
    } else {
      res.json(tickets);
    }
  });
});
// router.post("/add", function(req, res, next) {
//   let n_trip = {
//     _id: new ObjectID(),
//     from: req.body.from,
//     to: req.body.to,
//     vehicleID: req.body.vehicleID,
//     fee: req.body.fee,
//     start_time: req.body.start_time,
//     end_time: req.body.end_time,
//     __v: req.body.__v
//   };
//   let newTrip = new tripModel(n_trip);
//   newTrip.save(function(err, data) {
//     if (err) throw err;

//     res.send(data);
//   });

//   // tripModel.find({}, (err, trips) => {
//   //   res.send(trips);
//   // });
// });

module.exports = router;
