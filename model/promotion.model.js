const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionModel = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    station_id: Schema.Types.ObjectId,
    status: ['Hot', 'New', 'Best']
})

module.exports = promotionModel;    