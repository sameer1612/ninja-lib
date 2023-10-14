(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("#ninja-notify{color:#6495ed;font-family:sans-serif;position:fixed;top:1rem;right:1rem;padding:1em 2em;border:1px solid cornflowerblue;border-radius:.5em}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const a = `<h1 id="ninja-notify">
  <span>Your ninja is: </span>
  <span id="name"></span>
</h1>
`;
const t = ["Kakashi", "Itachi", "Shikamaru"];
function e() {
  return t[Math.floor(Math.random() * t.length)];
}
function i() {
  const n = document.createElement("div");
  n.innerHTML = a, document.body.appendChild(n), document.getElementById("name").innerText = e();
}
export {
  i as notifyNinja
};
