const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
    {
        phone: { type: String },
        email: { type: String },
        tags: { type: Map }
    },
    { _id: false }
);

const Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact;