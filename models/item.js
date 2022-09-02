const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  commentsSchema = new Schema({
    
    interest_level: Number,
    
    comment: String
    
    },{
        timestamps: true

      })


const itemSchema = new Schema({

    productName: String,
    
    brand: String,
    
    size: String,
    
    qualityLevel: String,
    
    reasons: String,
    
    location: String,
    
    category: String,
    
    price: Number,

    notes: String,
    
    deliveryChoices: String,
    
    status: Boolean,
    
    itemImg: String,
    
    comments: [commentsSchema],
    
    seller: [{type: Schema.Types.ObjectId, ref: 'User'}],
    
    interestUsers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    
    },{

    timestamps: true

    })

module.exports = mongoose.model('Item', itemSchema);