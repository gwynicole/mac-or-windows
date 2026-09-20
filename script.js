const screens = document.querySelectorAll(".screen");
const noBtn = document.getElementById("noBtn");
const hint = document.getElementById("hint");

let noClicks = 0;

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveNoButton() {
  noClicks++;
  const messages = [
    "Hmm... try again? 🥺",
    "I don't think you meant that.",
    "That button seems suspiciously difficult to click...",
    "Are you REALLY sure? 😭",
    "Okay, I'm taking this personally.",
    "Fine... I'll make it harder. 😌"
  ];

  hint.textContent = messages[Math.min(noClicks - 1, messages.length - 1)];

  if (window.innerWidth <= 650) {
    noBtn.style.transform = `translateX(${(Math.random() * 180 - 90)}px)`;
    return;
  }

  const parent = noBtn.parentElement.getBoundingClientRect();
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 90 - 45;
  noBtn.style.position = "relative";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function sayYes() {
  showScreen("yes");
  makeConfetti();
}

function makeConfetti() {
  const layer = document.getElementById("confetti");
  layer.innerHTML = "";
  const symbols = ["♥", "♡", "✦", "✧", "•"];

  for (let i = 0; i < 75; i++) {
    const item = document.createElement("span");
    item.className = "confetti";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.animationDelay = `${Math.random() * 1.4}s`;
    item.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    item.style.fontSize = `${10 + Math.random() * 18}px`;
    layer.appendChild(item);
  }
}

function ambientHearts() {
  const container = document.querySelector(".hearts");
  for (let i = 0; i < 14; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = Math.random() > .5 ? "♡" : "♥";
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDuration = `${10 + Math.random() * 12}s`;
    h.style.animationDelay = `${Math.random() * 10}s`;
    h.style.fontSize = `${10 + Math.random() * 22}px`;
    container.appendChild(h);
  }
}

ambientHearts();
