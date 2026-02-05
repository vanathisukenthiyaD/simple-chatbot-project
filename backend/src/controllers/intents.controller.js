const pool = require("../config/db");

exports.addIntent = async (req, res) => {
  try {
    const { intent_name, reply_text } = req.body;

    const result = await pool.query(
      "INSERT INTO intents (intent_name, reply_text) VALUES ($1, $2) RETURNING *",
      [intent_name, reply_text]
    );

    return res.json(result.rows[0]);
  } catch (error) {
    console.error("addIntent error:", error);
    return res.status(500).json({ error: "Failed to add intent" });
  }
};

exports.getIntents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM intents");
    return res.json(result.rows);
  } catch (error) {
    console.error("getIntents error:", error);
    return res.status(500).json({ error: "Failed to fetch intents" });
  }
};
