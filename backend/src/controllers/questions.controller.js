const pool = require("../config/db");

exports.addQuestion = async (req, res) => {
  const { intent_id, question_text } = req.body;

  const result = await pool.query(
    "INSERT INTO intent_questions (intent_id, question_text) VALUES ($1, $2) RETURNING *",
    [intent_id, question_text]
  );

  res.json(result.rows[0]);
};
