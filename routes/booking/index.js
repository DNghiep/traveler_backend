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
router.get('/:userid-:tripid', function (req, res, next) {
  userModel.findById(req.params.userid, (err, user) => {
    if(err) throw err;
    console.log(`found ${user}`);
    tripModel.findById(req.params.tripid, (err, trip) => {
      if(err) throw err;
      console.log(`found ${trip}`);
      const newTicket = new ticketModel({
        _id: mongoose.Types.ObjectId(),
        trip_id: trip._id,
        from: trip.from,
        to: trip.to,
        fee: trip.fee,
        onwer_id: mongoose.Types.ObjectId(),
        start_time: trip.start_time,
        end_time: trip.end_time
      })
      ticketModel.create(newTicket, (err, ticket) => {
        if(err) throw err;
        console.log('ticket created');
        res.status(201).json(ticket);
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