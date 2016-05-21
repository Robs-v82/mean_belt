var users = require("./../controllers/users.js")
var questions = require("./../controllers/questions.js")
var answers = require("./../controllers/answers.js")

module.exports = function(app) {
	app.get("/users", function(req, res) {
		users.index(req, res)
	})
	app.post("/users", function(req, res) {
		users.create(req, res)
	})
	app.get("/currentUser", function(req, res) {
		users.currentUser(req, res)
	})
	app.get("/questions", function(req, res) {
		questions.index(req, res)
	})
	app.post("/questions", function(req, res) {
		questions.create(req, res)
	})
	app.get("/questions/:id", function(req, res) {
		questions.targetQuestion(req, res)
	})
	app.post("/answers/:id", function(req, res) {
		answers.create(req, res)
		questions.update(req, res)
	})
	app.get("/theseAnswers/:id", function(req, res) {
		answers.theseAnswers(req, res)
	})
}