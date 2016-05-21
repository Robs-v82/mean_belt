var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	question: {type: String, required: true, unique:true},
	description: {type: String},
	posted_by: {type: Schema.Types.ObjectId, ref: 'User'},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'},],
	created_at: { type: Date, default: Date.now },
})


mongoose.model("Question", QuestionSchema)
