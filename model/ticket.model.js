const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketModel = new Schema({
    _id: Schema.Types.ObjectId,
    trip_id: Schema.Types.ObjectId,
    from: String,
    to: String,
    fee: Number,
    onwer_id: Schema.Types.ObjectId,
    start_time: Date,
    end_time: Date
})

module.exports = ticketModel;