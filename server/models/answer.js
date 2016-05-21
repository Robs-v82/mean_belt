var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	answer: {type: String, required: true},
	details: {type: String},
	posted_by: {type: Schema.Types.ObjectId, ref: 'User'},
	created_at: { type: Date, default: Date.now }
})

mongoose.model("Answer", AnswerSchema)