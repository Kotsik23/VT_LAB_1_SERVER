require("dotenv").config();
const express = require("express");
const personRouter = require("./routes/person.route");
const universityRouter = require("./routes/university.route");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db");
const universityModels = require("./models/university.model");
const personModels = require("./models/person.model");

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/person", personRouter);
app.use("/api/university", universityRouter);

const start = () => {
	try {
		app.listen(PORT, async () => {
			console.log(`Server is listening on: http://localhost:${PORT}`);
			await sequelize.authenticate();
			await sequelize.sync();
			console.log("Connection has been established successfully.");
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

start();
