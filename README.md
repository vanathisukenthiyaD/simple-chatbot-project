# Simple Chatbot Project

48-Hour Mini Project – Rule-based Chatbot  
(SQL + Backend + Frontend)

---

## 📌 Project Description
This is a simple rule-based chatbot management system.

Admin can:
- Create chatbot intents
- Add multiple questions for each intent
- Set one reply per intent

User can:
- Type a message in frontend chat UI
- Receive reply based on matching question

This is NOT an AI chatbot. It works using predefined rules stored in a SQL database.

---

## 🛠 Tech Stack
- Database: Supabase (PostgreSQL)
- Backend: Node.js + Express
- Frontend: HTML, CSS, JavaScript
- API Testing: Postman

---

## 🗂 Database Design

### Table: intents
- intent_id (Primary Key)
- intent_name
- reply_text

### Table: intent_questions
- question_id (Primary Key)
- intent_id (Foreign Key → intents.intent_id)
- question_text

---

## 🔗 Backend APIs

### POST /intents
Create a new intent.

### POST /questions
Add questions to an intent.

### GET /intents
Fetch all intents.

### POST /chat
Input:
{
  "message": "hello"
}

Backend logic:
- Search question_text
- Use SQL JOIN between intents and intent_questions
- Return reply_text

---

## 💻 Frontend
- Add Intent form
- Add Question form
- Simple Chat UI
  - Input box
  - Send button
  - Bot reply display

---

## ▶ How to Run the Project

Backend:
cd backend
npm install
npm start

Frontend:
Open frontend/index.html in browser.

---

## ❓ Logic Questions – Answers

Why separate intents and questions tables?
One intent can have multiple questions, so tables are separated to avoid data duplication.

What is a foreign key?
A foreign key links intent_questions to intents and ensures correct relationship.

How does backend match user message?
Backend compares user message with question_text using SQL JOIN and returns reply_text.

Difference between SQL JOIN and MongoDB embedding?
SQL JOIN connects multiple tables. MongoDB embedding stores related data inside a document.

---

## 📦 Submission
GitHub Repository:
https://github.com/vanathisukenthiyaD/simple-chatbot-project
