var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var univSchema = new Schema({
    _id: Number,
    name: String,
    
    y2013: {
	total: {type: Number, default: 0},
	male: {type: Number, default: 0},
	female: {type: Number, default: 0},
	tuition: {type: Number, default: 0},
	enroll: {type: Boolean, default: false},
	finance: {type: Boolean, default: false}
    },
    
    y2012: {
	total: {type: Number, default: 0},
	male: {type: Number, default: 0},
	female: {type: Number, default: 0},
	tuition: {type: Number, default: 0},
	enroll: {type: Boolean, default: false},
	finance: {type: Boolean, default: false}
    },
    
    y2011: {
	total: {type: Number, default: 0},
	male: {type: Number, default: 0},
	female: {type: Number, default: 0},
	tuition: {type: Number, default: 0},
	enroll: {type: Boolean, default: false},
	finance: {type: Boolean, default: false}
    }

})
    
mongoose.model('university', univSchema)
mongoose.connect('mongodb://localhost/ipeds')
