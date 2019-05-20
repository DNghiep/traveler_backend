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


function station(name, location){
  return {name: name, location: location};
}

const feeList = [150000, 180000, 100000, 260000, 200000, 160000];

const seatList = [30, 40, 26, 14, 4, 8];

function getRandom(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

const monthList = [6, 7, 8, 9];

const stationList = [
  station("Hà Nội", "Bến xe Mỹ Đình"),
  station("Hà Nội", "Bến xe Giáp Bát"),
  station("Hà Nội", "Bến xe Lương Yên"),
  station("Hà Nội", "Bến xe Nước Ngầm"),
  station("Hà Nội", "Bến xe Gia Lâm"),
  station("Hồ Chí Minh", "Bến xe Miền Đông"),
  station("Hồ Chí Minh", "Bến xe Miền Tây"),
  station("Đà Nẵng", "Bến xe trung tâm Đà Nẵng"),
  station("Bình Thuận", "Bến xe Đức Linh"),
  station("Yên Bái", "Bến xe Nước Mát"),
  station("Bắc Giang", "Bến xe Lục Ngạn"),
  station("Lâm Đồng", "Bến xe liên tỉnh Đà Lạt"),
  station("Quãng Ninh", "Bến xe Bãi Cháy"),
  station("Bến Tre", "Bến xe Bến Tre"),
  station("Quảng Nam", "Bến xe Nam Phước"),
]

function getRandomDay() {
  const month = monthList[getRandom(4)];
  const day = getRandom(30);
  const hours = getRandom(24);
  return {depart: new Date(2019, month, day, hours, 0, 0, 0),
    arrival: new Date(2019, month, day, hours+3, 0, 0, 0)}
}

function createTrip(number) {
  let tripList = [];
  for (let i = 0; i < number; i++) {
    let station = stationList[getRandom(15)];
    let toStation = stationList[getRandom(15)];
    let seat = seatList[getRandom(6)];
    let days = getRandomDay();
    const newTrip = new tripModel({
      _id: mongoose.Types.ObjectId(),
      from_name: station.name,
      from_location: station.location,
      to_name: toStation.name,
      to_location: toStation.location,
      base_fee: feeList[getRandom(6)],
      depart_time: days.depart,
      arrival_time: days.arrival,
      seat_count: seat,
      seat_remain: seat
    })
    tripList.push(newTrip);
    // console.log(newTrip);
  }
  return tripList;
}
/* GET home page. */
router.get('/', function (req, res, next) {
  const tripList = createTrip(7000);
  tripModel.create(tripList, (err, tripList) =>{
    if(err){
      console.log(err);
      return false;
    }
    console.log('trip added!');
    res.status(200).json(tripList);
  })
});

module.exports = router;
