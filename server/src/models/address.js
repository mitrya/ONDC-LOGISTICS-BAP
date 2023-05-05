const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema(
    {
        door: { type: String },
        rName: { type: String },
        // building: { type: String },
        street: { type: String },
        // locality: { type: String },
        // ward: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        areaCode: { type: String }
    },
    { _id: false }
);

const Address = mongoose.model('Address',AddressSchema);

module.exports = Address;