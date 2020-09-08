const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

let Cdata = new Schema({
    FIPS:{type:String},
	Admin2:{type:String},
	Province_State:{type:String},
	Country_Region:{type:String},
	Last_Update:{type:Number},
	Lat:{type:Number},
	Long_:{type:Number},
	Confirmed:{type:Number},
	Deaths:{type:Number},
	Recovered:{type:Number},
	Active:{type:Number},
	Combined_Key:{type:String},
	Incidence_Rate:{type:Number},
	Case_Fatality_Ratio:{type:Number}
}, {collection: 'cdata'})

module.exports = mongoose.model("Cdata", Cdata);