// Add Intent
async function addIntent() {
  const intent_name = document.getElementById("intentName").value;
  const reply_text = document.getElementById("replyText").value;

  await fetch("http://localhost:3000/intents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ intent_name, reply_text })
  });

  alert("Intent added successfully");
}

// Add Question
async function addQuestion() {
  const intent_id = document.getElementById("intentId").value;
  const question_text = document.getElementById("questionText").value;

  await fetch("http://localhost:3000/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ intent_id, question_text })
  });

  alert("Question added successfully");
}

// Chat
async function sendMessage() {
  const message = document.getElementById("message").value;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  document.getElementById("reply").innerText = data.reply;
}
