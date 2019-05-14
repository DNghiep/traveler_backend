const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketModel = new Schema({
    _id: Schema.Types.ObjectId,
    onwer_id: Schema.Types.ObjectId,
    trip_id: Schema.Types.ObjectId,
    status: ['Paid'],
    total_fee: Number,
    creation_date: Date
})

module.exports = ticketModel;