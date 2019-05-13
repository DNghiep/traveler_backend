var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var ObjectID = require("mongodb").ObjectID;
const tripSchema = require("../../model/trip.model");

//const userModel = mongoose.model('user', userSchema);
const tripModel = mongoose.model("trip", tripSchema);
//const ticketModel = mongoose.model('ticket', ticketSchema);

/* GET home page. */
router.get("/", function(req, res, next) {
  //req.params.date
  //let time = new Date("2019-05-12");
  //console.log(req.query);
  let start = new Date(req.query.date);
  let end = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate() + 1
  );

  console.log("Get all trips From: " + start + "To: " + end);
  query = { start_time: { $gte: start, $lt: end } };
  tripModel.find(query, (err, trips) => {
    if (err) {
      res.send(err);
    } else {
      res.send(trips);
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
