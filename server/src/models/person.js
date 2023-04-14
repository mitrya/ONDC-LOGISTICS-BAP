const mongoose = require('mongoose');
const {Schema} = mongoose;

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
	// name : {
	// 	first: String,
	// 	middle : String,
	// 	last :String
	// },
	name: String,
	// address : {type : Address},
	phone: String,
	email: String,
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