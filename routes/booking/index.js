var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const userSchema = require('../../model/user.model');
const tripSchema = require('../../model/trip.model');
const ticketSchema = require('../../model/ticket.model');

const userModel = mongoose.model('user', userSchema);
const tripModel = mongoose.model('trip', tripSchema);
const ticketModel = mongoose.model('ticket', ticketSchema);
/* GET home page. */
router.get('/:userid-:tripid-:quality', function (req, res, next) {
  userModel.findById(req.params.userid, (err, user) => {
    if(err){
      console.log(err);
      return false;
    } 
    console.log(`found ${user}`);
    tripModel.findById(req.params.tripid, (err, trip) => {
      if(err){
        console.log(err);
        return false;
      } 
      if(!trip){
        res.status(400).json(trip)
        return false;
      }
      // console.log(`found ${trip}`);
      if(trip.seat_remain < 1){
        console.log(trip);
        res.status(503).json(trip);
        return false;
      }
      let ticketList = []
      for(let i = 0; i < req.params.quality; i ++){
        ticketList.push(new ticketModel({
          _id: mongoose.Types.ObjectId(),
          owner_id: mongoose.Types.ObjectId(user._id),
          trip_id: mongoose.Types.ObjectId(trip._id),
          status: 'Paid',
          total_fee: trip.base_fee,
          creation_date: new Date(),
          depart_time: trip.depart_time,
          arrival_time: trip.arrival_time,
          from_str: trip.from_name,
          to_str: trip.to_name
        }));
      }
      ticketModel.create(ticketList, (err, ticket) => {
        if(err) {
          console.log(err);
          return false;
        }
        console.log('ticket created');
        tripModel.update({_id: trip._id}, {$set: {seat_remain: trip.seat_remain - req.params.quality}}, {multi: false}, (err, updated_trip) => {
          if(err){
            console.log(err);
            return false;
          } 
          console.log('trip updated');
          res.status(201).json(ticket);
        })
      })
    })
  })
});
module.exports = router;


// const newtrip = new tripModel({
//   _id: mongoose.Types.ObjectId(),
//   from: 'Ho Chi Minh',
//   to: 'Da Lat',
//   vehicleID: mongoose.Types.ObjectId(),
//   fee: 150000,
//   start_time: new Date(),
//   end_time: new Date(),
// })
// tripModel.create(newtrip, (err) => {
//   if(err) throw err;
//   console.log('created trip');
//   tripModel.find((err, trip) => 
//     {
//       if (err) throw err;
//       console.log(trip);
//       res.status(200).json(trip);
//     })
// })



// const newuser = new userModel({
//   _id: mongoose.Types.ObjectId(),
//   user_name: 'Nguyen Huy',
//   account: 'huynguyenxuan',
//   password: 'huyhuyhuy',
//   email: 'something@gmail.com',
//   address: 'odaudotrenthegioi',
//   phone: '0918194091'
// })
// userModel.create(newuser, (err) => {
//   if(err) throw err;
//   console.log('created user');
//   userModel.find((err, user) => {
//     if(err) throw err;
//     console.log(user);
//     res.status(200).json(user);
//   })
// })