const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripModel = new Schema({
    _id: Schema.Types.ObjectId,
    from_name: String,
    from_location: String,
    to_name: String,
    to_location: String,
    base_fee: Number,
    depart_time: Date,
    arrival_time: Date,
    seat_count: Number,
    seat_remain: Number
})

module.exports = tripModel;