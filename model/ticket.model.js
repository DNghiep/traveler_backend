const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketModel = new Schema({
    _id: Schema.Types.ObjectId,
    owner_id: Schema.Types.ObjectId,
    trip_id: Schema.Types.ObjectId,
    status: String,
    total_fee: Number,
    creation_date: Date,
    depart_time: Date,
    arrival_time: Date,
    from_str: String,
    to_str: String
})

module.exports = ticketModel;