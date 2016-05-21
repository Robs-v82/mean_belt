var mongoose = require("mongoose")
var User = mongoose.model("User")

module.exports = {
	index: function(req, res) {
		User.find({})
		.populate("users")
		.exec(function(err, users) {
			if(err) {
				console.log(err)
			}
			else {
				res.json(users)
			}
		})
	},

	create: function(req, res) {
		var newUser = new User({name: req.body.name})
		newUser.save(function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				res.json(results)
			}
		})
	},

	currentUser: function(req, res) {
		User.findOne({}, {}, { sort: {"created_at": -1}}, function(err, results) {
			if(err) {
				res.json(err)
			}
			else {
				res.json(results)
			}			
		})
	}
}