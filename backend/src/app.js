require("dotenv").config();

const express = require("express");
const cors = require("cors");

const intentRoutes = require("./routes/intents.routes");
const questionRoutes = require("./routes/questions.routes");
const chatRoutes = require("./routes/chat.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/intents", intentRoutes);
app.use("/questions", questionRoutes);
app.use("/chat", chatRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
