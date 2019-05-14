const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    _id: Schema.Types.ObjectId,
    user_name: String,
    account: String,
    password: String,
    email: String,
    address: String,
    phone: String
})


module.exports = userModel;