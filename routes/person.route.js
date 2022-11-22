const express = require("express");
const personController = require("../controllers/person.controller");

const router = express.Router();

router.get("/", personController.getAll);
router.get("/:id", personController.getOne);
router.post("/", personController.createPerson);
router.delete("/:id", personController.deletePerson);
router.patch("/:id", personController.updatePerson);

module.exports = router;
