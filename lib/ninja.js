import notifyHTML from "./notify.html?raw";
import "./styles.css";

const ninjas = ["Kakashi", "Itachi", "Shikamaru"];

function getRandomNinja() {
  return ninjas[Math.floor(Math.random() * ninjas.length)];
}

export function notifyNinja() {
  const notifyEl = document.createElement("div");
  notifyEl.innerHTML = notifyHTML;
  document.body.appendChild(notifyEl);
  document.getElementById("name").innerText = getRandomNinja();
}
