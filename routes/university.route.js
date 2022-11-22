const express = require("express");
const universityController = require("../controllers/university.controller");

const router = express.Router();

router.get("/university", universityController.getUniversities);
router.get("/faculty", universityController.getFaculties);
router.get("/course", universityController.getCourses);
router.get("/group", universityController.getGroups);
router.get("/student", universityController.getStudents);

module.exports = router;
