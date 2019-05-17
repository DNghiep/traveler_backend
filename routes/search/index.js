var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const stationSchema = require('../../model/station.model');
const tripSchema = require('../../model/trip.model');

const stationModel = mongoose.model('station', stationSchema);
const tripModel = mongoose.model('trip', tripSchema);



router.post('/', function(req, res, next) {
    var search_input = new Object();
    if (req.body.from_name) search_input.from_name = req.body.from_name;
    if (req.body.to_name) search_input.to_name = req.body.to_name;
    if (req.body.depart_time){
        const depart_day = new Date(req.body.depart_time);
        const date = depart_day.getDate();
        const year = depart_day.getFullYear();
        const month = depart_day.getMonth();
        search_input.depart_time = {
            $gte: (year) + "-" + (month+1) + "-" + (date),
            $lt: (year) + "-" + (month+1) + "-" + (date+1)
        }
    }
    // console.log(`finding for: ${search_input.depart_time.$gte} - ${search_input.depart_time.$lt}`);
    tripModel.find(search_input, (err, search) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        console.log(`found ${search}`);
        if (!search) {
            res.status(404).json(undefined);
            return;
        }
        console.log(search);
        res.status(200).json(search);
    });
})

module.exports = router;