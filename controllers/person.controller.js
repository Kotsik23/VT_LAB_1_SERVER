const Person = require("../models/person.model");

class PersonController {
	async getAll(req, res) {
		try {
			const data = await Person.findAll();
			res.json(data);
		} catch (error) {
			console.log("Some error in DB. ", error);
		}
	}

	async getOne(req, res) {
		const { id } = req.params;
		try {
			const data = await Person.findOne({ where: { id } });
			res.json(data);
		} catch (error) {
			console.log("Some error in DB. ", error);
		}
	}

	async createPerson(req, res) {
		try {
			const query = req.query;
			const data = await Person.create(query);
			res.json({
				status: "Successfully created",
				data,
			});
		} catch (error) {
			console.log("Some error in DB. ", error);
		}
	}

	async deletePerson(req, res) {
		const { id } = req.params;

		try {
			await Person.destroy({ where: { id } });

			res.json({
				status: "Successfully deleted.",
			});
		} catch (error) {
			console.log(error);
		}
	}

	async updatePerson(req, res) {
		const data = req.body;
		const { id } = req.params;

		try {
			const person = await Person.findOne({ where: { id } });

			const updatedPerson = await person.update({
				id,
				...data,
			});

			res.json({
				status: "Successfully updated.",
				data: updatedPerson,
			});
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new PersonController();
