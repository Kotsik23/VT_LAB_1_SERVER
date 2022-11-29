const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const phoneValidationRegex = /^[+]*[(]?\d{1,3}[)]?[-\s/\d]*$/g;
const emailValidationRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const Person = sequelize.define(
	"persons",
	{
		name: DataTypes.STRING,
		position: DataTypes.STRING,
		department: DataTypes.STRING,
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		gender: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		comment: DataTypes.STRING,
	},
	{
		timestamps: true,
	}
);

module.exports = Person;
