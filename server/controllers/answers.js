var mongoose = require("mongoose")
var Answer = mongoose.model("Answer")

module.exports = {

	create: function(req, res) {
		console.log(req.body)
		console.log(req.params.id)
		var newAnswer = new Answer({
			_question: req.params.id,
			answer: req.body.answer,
			details: req.body.details,
			posted_by: req.body.posted_by,
		})
		newAnswer.save(function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				res.json(results)
			}
		})
	},

	theseAnswers: function(req, res) {
		console.log(req.params.id)
		Answer.find({_question: req.params.id}, function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				console.log(results)
				res.json(results)
			}
		})
	}
}