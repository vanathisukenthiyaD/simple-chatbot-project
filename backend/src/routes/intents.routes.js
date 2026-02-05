const router = require("express").Router();
const { addIntent, getIntents } = require("../controllers/intents.controller");

router.post("/", addIntent);
router.get("/", getIntents);

module.exports = router;
