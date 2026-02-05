const pool = require("../config/db");

exports.chat = async (req, res) => {
  const { message } = req.body;

  const result = await pool.query(
    `
    SELECT i.reply_text
    FROM intent_questions q
    JOIN intents i ON q.intent_id = i.intent_id
    WHERE LOWER(q.question_text) = LOWER($1)
    LIMIT 1
    `,
    [message]
  );

  if (result.rows.length > 0) {
    res.json({ reply: result.rows[0].reply_text });
  } else {
    res.json({ reply: "Sorry, I don't understand." });
  }
};
