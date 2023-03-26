const mongoose = require('mongoose');
const { Schema } = mongoose;
const PersonSchema = require('./person.js');

const AddressSchema = new mongoose.Schema(
    {
        door: { type: String },
        name: { type: String },
        building: { type: String },
        street: { type: String },
        locality: { type: String },
        ward: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        areaCode: { type: String }
    },
    { _id: false }
);

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

const ContactSchema = new mongoose.Schema(
    {
        phone: { type: String },
        email: { type: String },
        tags: { type: Map }
    },
    { _id: false }
);


const orderSchema = new Schema({
    pickupaddress:{
        type:[AddressSchema],
        required: true
    },
    deliveryaddress:{
        type:[AddressSchema],
        required: true
    },
    tracking: { type: Boolean },
    //billing: { type: BillingSchema },
    items: { type: [itemSchema] , required: true},
    state: { type: String , required: true}, //["PENDING-CONFIRMATION", "Ordered", "CANCELLED", "Pending", "Active", "Processing"]
    userId: {type: String},
   // payment: { type: PaymentSchema },
    transactionId: { type: String },
    paymentStatus: { 
        type: String, 
        enum: ['PAID', 'NOT-PAID'], 
        default: null 
    },
    paymentdeatils:{
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
        type:[ContactSchema]
    },
    message: { type: String },//handle with care: example
    

});

module.exports = mongoose.model('Order', orderSchema);

