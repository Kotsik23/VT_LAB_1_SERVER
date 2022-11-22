const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const University = sequelize.define(
	"university",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

const Faculty = sequelize.define(
	"faculty",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

const Course = sequelize.define(
	"course",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

const Group = sequelize.define(
	"group",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

const Student = sequelize.define(
	"student",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

University.hasMany(Faculty);
Faculty.belongsTo(University);

Faculty.hasMany(Course);
Course.belongsTo(Faculty);

Course.hasMany(Group);
Group.belongsTo(Course);
Group.belongsTo(Faculty);

Group.hasMany(Student);
Student.belongsTo(Group);

module.exports = {
	University,
	Faculty,
	Course,
	Group,
	Student,
};
