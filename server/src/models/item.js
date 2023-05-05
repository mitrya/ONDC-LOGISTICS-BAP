const mongoose = require('mongoose');

const itemSchema = new Schema(
    {
    weight:{
        type : Number,
        required: true
    },
    dimensions:{
        length:{
            type:Number
        },
        breadth:{
            type:Number
        },
        height:{
            type:Number
        }
    },
    
    id: { type: String, required: true },
    quantity: { type: Number, required: true },
    category:{
        type:String,
        required: true
    },
    product:{type:String, required: false},
    
    },
    { _id: false }
);

const Item = mongoose.model('Item',itemSchema);

module.exports = Item;