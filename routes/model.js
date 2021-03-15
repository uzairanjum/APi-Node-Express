const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name : String,
    email : String, })

    module.exports = mongoose.model('users', userSchema)