const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stationModel = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    location: String
})

module.exports = stationModel;