const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    _id: Schema.Types.ObjectId,
    account: String,
    password: String,
    user_name: String,
    email: String,
    address: String,
    phone: String
})


module.exports = userModel;