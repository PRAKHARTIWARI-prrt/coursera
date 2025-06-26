
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "yellow";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.padding = "20px";

let header = document.createElement("h1");
header.innerText = "My JavaScript Website";
header.style.color = "#333";
document.body.appendChild(header);

let paragraph = document.createElement("p");
paragraph.innerText = "This site is made using only JavaScript.";
paragraph.style.fontSize = "18px";
document.body.appendChild(paragraph);

let button = document.createElement("button");
button.innerText = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.marginTop = "20px";
button.style.cursor = "pointer";
button.style.border = "none";
button.style.backgroundColor = "#007BFF";
button.style.color = "white";
button.style.borderRadius = "5px";
document.body.appendChild(button);

let message = document.createElement("div");
message.style.marginTop = "30px";
message.style.fontSize = "20px";
message.style.color = "#007BFF";
document.body.appendChild(message);

button.addEventListener("click", function () {
  let time = new Date().toLocaleTimeString();
  message.innerText = "You clicked the button at " + time;
});
