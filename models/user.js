const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('../models/item')



const userSchema = new Schema({
    //user info via OAuth
    username: String,
    email: String,
    googleId: String,
    //other info
    userLocation: String,
    introInfo: String,
    },{
    timestamps: true
    
    })

module.exports = mongoose.model('User', userSchema);
    
