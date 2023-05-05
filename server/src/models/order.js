const mongoose = require('mongoose');
const { Schema } = mongoose;
const PersonSchema = require('./person.js');

const orderSchema = new Schema({
    pickupaddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required: true
    },
    deliveryaddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required: true
    },
    tracking: { type: Boolean },
    //billing: { type: BillingSchema },
    // items: { type: [itemSchema] , required: true},
    items: { type: {type:String} , value:{type:String}},
    state: { type: String , required: true}, //["PENDING-CONFIRMATION", "Ordered", "CANCELLED", "Pending", "Active", "Processing"]
    userId: {type: String},
   // payment: { type: PaymentSchema },
    transactionId: { type: String },
    paymentStatus: { 
        type: String, 
        enum: ['PAID', 'NOT-PAID'], 
        default: null 
    },
    paymentdetails:{
        amount:{
            type: Number,
            required: true
        },
        // tax:{
        //     type:Number,
        //     required:true
        // }
    },
    bppId: { type: String },
    bapOrderId: { type: String },
    providercontact:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Contact'
    },
    message: { type: String },//handle with care: example
    

});

module.exports = mongoose.model('Order', orderSchema);

