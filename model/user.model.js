const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    _id: Schema.Types.ObjectId,
    email: { type: String, unique: true},
    password: String,
    person: new Schema({
        full_name: String,
        citizen_id: String,
        address: String,
        phone: String
    })
})


module.exports = userModel;