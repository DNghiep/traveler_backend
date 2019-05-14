var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const stationSchema = require('../../model/station.model');
const tripSchema = require('../../model/trip.model');

const stationModel = mongoose.model('station', stationSchema);
const tripModel = mongoose.model('trip', tripSchema);

/* GET home page. */
router.post('/getstation', function (req, res, next) {
  const stationName = req.body.stationName;
  console.log(stationName);
  stationModel.findOne({ name: stationName }, (err, station) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log(station);
    res.status(200).json(station);
  })
});

router.get('/:id', function(req, res, next){
  stationModel.findById(req.params.id, (err, station) =>{
    if(err){
      console.log(err);
      return false;
    }
    console.log(station);
    res.status(200).json(station);
  })
})

router.post('/', function (req, res, next) {
  var search_input = new Object();
  if (req.body.from_id) search_input.from_id = req.body.from_id;
  if (req.body.to_id) search_input.to_id = req.body.to_id;

  tripModel.find(search_input, (err, search) => {
    if (err) {
      res.status(500).send(error);
      return;
    }
    console.log(`found ${search}`);
    if(!search) {
      res.status(404).json(undefined);
      return;
    }
    console.log('body time');
    depart_time = new Date(req.body.depart_time);
    console.log(depart_time - 1);
    console.log('body time');
    if(search.lenght < 1) search = [search];
    search.forEach(element => console.log(new Date(Date.parse(element.depart_time)) - new Date(Date.parse(depart_time))));
    if(req.body.depart_time){
      let newsearch = [];
      search.forEach(element => {
        console.log(Date.parse(element.depart_time) - Date.parse(depart_time) < 86400000);
        if(Date.parse(element.depart_time) - Date.parse(depart_time) < 86400000){
          newsearch.push(element);
          console.log(element);
        }
      })
        // const gap = new Date();
        // gap.setDate()
      search = newsearch;
    }
    console.log(search);
    res.status(200).json(search);
  });
})

module.exports = router;
