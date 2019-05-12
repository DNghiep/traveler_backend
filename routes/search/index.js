var express = require('express');
var router = express.Router();
const Sequelize= require('sequelize');
const Op= Sequelize.Op;

var bodyparser= require('body-parser');

const mongoose = require('mongoose');
const userSchema = require('../../model/user.model');
const tripSchema = require('../../model/trip.model.js');
const ticketSchema = require('../../model/ticket.model');

const userModel = mongoose.model('user', userSchema);
const tripModel = mongoose.model('trip', tripSchema);
const ticketModel = mongoose.model('ticket', ticketSchema);
/* GET home page. */

router.post("/",(req,res)=>{
  var search_input = new Object();
  if (req.body.from) search_input.from= req.body.from;
  if (req.body.to) search_input.to= req.body.to;
  if (req.body.start_time) search_input.start_time= req.body.start_time;
  if (req.body.end_time) search_input.end_time= req.body.end_time;
  

tripModel.find(search_input,(err,search)=>{
  if (err) res.status(500).send(error)
  res.status(200).json(search)
  console.log(`found ${search}`);
});
});




module.exports = router;
