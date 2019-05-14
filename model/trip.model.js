const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripModel = new Schema({
    _id: Schema.Types.ObjectId,
    from_id: Schema.Types.ObjectId,
    to_id: Schema.Types.ObjectId,
    base_fee: Number,
    depart_time: Date,
    arrival_time: Date,
    seat_count: Number,
    seat_remain: Number
})

module.exports = tripModel;