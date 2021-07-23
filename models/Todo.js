const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title:{
		type:'string',
		required:true 
	}
});

module.exports = mongoose.model('todo',todoSchema);