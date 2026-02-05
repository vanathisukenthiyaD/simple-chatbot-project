CREATE TABLE intents (
    intent_id SERIAL PRIMARY KEY,
    intent_name TEXT NOT NULL,
    reply_text TEXT NOT NULL
);

CREATE TABLE intent_questions (
    question_id SERIAL PRIMARY KEY,
    intent_id INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    FOREIGN KEY (intent_id)
        REFERENCES intents(intent_id)
        ON DELETE CASCADE
);
