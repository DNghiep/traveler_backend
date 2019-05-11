
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const tripModel = new Schema({
    _id: Schema.Types.ObjectId,
    from: String,
    to: String,
    vehicleID: Schema.Types.ObjectId,
    fee: Number,
    start_time: Date,
    end_time: Date,
})

module.exports = tripModel;