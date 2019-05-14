var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const userSchema = require('../model/user.model');
const tripSchema = require('../model/trip.model');
const ticketSchema = require('../model/ticket.model');
const stationSchema = require('../model/station.model');
const promotionSchema = require('../model/promotion.model');

const userModel = mongoose.model('user', userSchema);
const tripModel = mongoose.model('trip', tripSchema);
const ticketModel = mongoose.model('ticket', ticketSchema);
const stationModel = mongoose.model('station', stationSchema);
const promotionModel = mongoose.model('promotion', promotionSchema);


// const newUser = new userModel({
//   _id: mongoose.Types.ObjectId(),
//   email: "nguyenhuy17798@gmail.com",
//   password: "anotherhashstring",
//   person: {
//       full_name: "Dang Minh Ngon",
//       citizen_id: "274663479",
//       address: "268 Ly Thuong Kiet",
//       phone: "0918467409"
//   }
// })

const newFromStation = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Ho Chi Minh",
  location: "Ben Xe Mien Tay"
})

const newToStation = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Bac Lieu",
  location: "Ben Xe Bac Lieu"
})

const newToStation1 = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Ca Mau",
  location: "Ben Xa Ca Mau"
})

const newToStation2 = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Vung Tau",
  location: "Vung Tau"
})

const newToStation3 = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Ha Noi",
  location: "Ben Xe Cau Giay"
})

const newToStation4 = new stationModel({
  _id: mongoose.Types.ObjectId(),
  name: "Ha Tinh",
  location: "Ben Xe Ha Tinh"
})

const newTrip1 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newFromStation._id,
  to_id: newToStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 11, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 14, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip2 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation._id,
  to_id: newFromStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip3 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newFromStation._id,
  to_id: newToStation1._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 18, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip4 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation._id,
  to_id: newFromStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 13, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 14, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip5 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation._id,
  to_id: newFromStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip6 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation._id,
  to_id: newFromStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip7 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation3._id,
  to_id: newToStation2._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip8 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation4._id,
  to_id: newToStation2._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

const newTrip9 = new tripModel({
  _id: mongoose.Types.ObjectId(),
  from_id: newToStation._id,
  to_id: newFromStation._id,
  base_fee: 180000,
  depart_time: new Date(2019, 9, 17, 15, 30, 0, 0),
  arrival_time: new Date(2019, 9, 17, 18, 30, 0, 0),
  seat_count: 30,
  seat_remain: 30
})

/* GET home page. */
router.get('/', function(req, res, next) {
  tripModel.create(newTrip1, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip2, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip3, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip4, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip5, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip6, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip7, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip8, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  tripModel.create(newTrip9, (err, trip) =>{
    if(err) console.log(err);
    console.log(trip);
  })
  stationModel.create(newFromStation, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
  stationModel.create(newToStation, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
  stationModel.create(newToStation1, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
  stationModel.create(newToStation2, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
  stationModel.create(newToStation3, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
  stationModel.create(newToStation4, (err, station) =>{
    if(err) console.log(err);
    console.log(station);
  })
});

module.exports = router;
