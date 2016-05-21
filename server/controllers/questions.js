var mongoose = require("mongoose")
var Question = mongoose.model("Question")
var Answer = mongoose.model("Answer")


module.exports = {
	index: function(req, res) {
		Question.find({})
		.populate("questions")
		.exec(function(err, results) {
			if(err) {
				res.json(err)			}
			else {
				res.json(results)
			}
		})
	},

	create: function(req, res) {
		var newQuestion = new Question({
			question: req.body.question,
			description: req.body.description,
			posted_by: req.body.posted_by
		})
		newQuestion.save(function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				res.json(results)
			}
		})
	},

	targetQuestion: function(req, res) {
		var target_id = req.params.id
		Question.find({_id: target_id}, function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				res.json(results)
			}
		})
	},

	update: function(req, res) {
		thisAnswer = Answer.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, answer) {
	 		console.log(answer)
		Question.findOne({_id: req.params.id}, function(err, question) {
			if(err) {
				console.log(err)
			}
			else {
				question.answers.push(thisAnswer._id)
				question.save(function(err) {
					if(err) {
						console.log(err)
					}
				})
			}
		})
	})
	}
}


	// update: function(req, res) {
	// 	thisAnswer = Answer.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, answer) {
	// 			console.log(answer)
	// 	})
	// 	Post.findOne({_id: req.params.id}, function(err, post) {
	// 		if(err) {
	// 			res.json(err)
	// 		}
	// 		else {
	// 			console.log("SUCCESS")
	// 			post.answers.push(thisAnswer._id)
	// 			console.log(post)
	// 		}
	// 	})

