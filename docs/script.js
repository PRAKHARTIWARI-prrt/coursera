import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
const API_KEY = AIzaSyDWxsXhlCPs6XcVwdD36TlULoUdD8kqxwE;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userInput.value = "";

  try {
    const result = await model.generateContent(text);
    const reply = result.response.text();
    addMessage(reply, "bot");
  } catch (error) {
    addMessage("⚠️ Error: Could not connect to Gemini API.", "bot");
    console.error(error);
  }
}
