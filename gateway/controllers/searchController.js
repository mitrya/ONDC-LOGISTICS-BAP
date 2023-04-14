// import data from '../models/data.json'
const data = require('../models/data.json')

module.exports.search = function(req,res){
	console.log("req body",req.body);
	const {searchQuery} = req.body
	// const {source,destination,weight,length,width,height,value,objectType,serviceType} = req.body.searchQuery;
	if(!searchQuery.source||!searchQuery.destination||!searchQuery.weight||!searchQuery.length||!searchQuery.width||!searchQuery.height||!searchQuery.value||!searchQuery.objectType||!searchQuery.serviceType){
	// // if(!searchQuery)	{
			return res.status(400).json({
			message:"All fields are required"
		});
	}
	console.log("data is = ",data);
	return res.json({data : data})
	// data.forEach(e => console.log(e.source))

}