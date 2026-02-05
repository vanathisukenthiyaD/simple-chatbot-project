const router = require("express").Router();
const { addQuestion } = require("../controllers/questions.controller");

router.post("/", addQuestion);

module.exports = router;
