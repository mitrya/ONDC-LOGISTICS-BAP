const mongoose = require('mongoose');
const {Schema} = mongoose;

const Contact  = new Schema({
	phone: String,
	email: String,
}, {_id: false});

const Address = new Schema({
	door : {
		type: String,
		required: true
	},
	name : {
		type: String
	},
	building : {
		type: String
	},
	street : {
		type: String,
		required: true
	},
	locality: {
		type: String
	},
	ward: String,
	city : {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true,
		default : "INDIA"
	},
	area_code : {
		type: String,
		required: true
	}
}, {_id: false});

const Person = new Schema({
	name : {
		first: String,
		// middle : String,
		last :String
	},
	image : {
		type: String
	},
	dob : {
		type: String,
		required: true,
		format : Date
	},
	gender : {
		type: String,
		required: true
	},
	cred : String,
	address : {type : Address},
	contact : {type : Contact},
	password:{
		type : String,
		required: true
	}
});

Person.virtual('fullName').get(function() {
	return this.name.first + ' ' + this.name.middle + ' ' + this.name.last;
  });


const User = mongoose.model('user',Person);

module.exports =  User;