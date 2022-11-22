const universityModels = require("../models/university.model");

class UniversityController {
	async getUniversities(req, res) {
		try {
			const data = await universityModels.University.findAll();

			res.json(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	async getFaculties(req, res) {
		try {
			const data = await universityModels.Faculty.findAll();

			res.json(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	async getCourses(req, res) {
		try {
			const data = await universityModels.Course.findAll();

			res.json(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	async getGroups(req, res) {
		try {
			const data = await universityModels.Group.findAll();

			res.json(data);
		} catch (error) {
			console.log(error.message);
		}
	}

	async getStudents(req, res) {
		try {
			const data = await universityModels.Student.findAll();

			res.json(data);
		} catch (error) {
			console.log(error.message);
		}
	}
}

module.exports = new UniversityController();
